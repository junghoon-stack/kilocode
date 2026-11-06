# QraftCode Architecture

**YOUR CODE. YOUR CRAFT.**  
**AI SHOULD BE FREE.**

This document records the initial architecture for evolving the KiloCode fork into QraftCode. It is a design baseline, not a claim that the proposed products or integrations are already implemented.

## Repository baseline

The repository is a Bun/Turborepo TypeScript monorepo. Its existing `packages/opencode/` package is the CLI runtime, TUI, session engine, and HTTP server. Provider integrations already exist there through AI SDK packages and Kilo-specific gateway code. The repository also contains SDK, VS Code, JetBrains, web UI, and gateway packages.

**Decision:** extend and reuse these existing systems where suitable. Do not create a second CLI runtime or duplicate existing provider adapters just to match a proposed folder tree. Keep QraftCode-owned behavior isolated in clearly named packages/directories so upstream synchronization remains manageable.

## Product boundaries

- **QraftCode CLI:** evolve the existing CLI product. Local use should not require a QraftCode account. Users may configure their own provider credentials or use a genuinely unauthenticated provider only after its official documentation and access conditions are verified.
- **QraftCode Zen:** a separately deployable, OpenAI-compatible API service. It owns server-side provider credentials, policy, rate limiting, health state, and usage accounting. Provider credentials must never be delivered to a client.
- **QraftCode Web:** a registered-user chat application. It calls Zen through authenticated application endpoints and supports conversation history, model selection, streaming, and available model capabilities.

The CLI, Zen, and Web share provider/model contracts and capability definitions; they do not share privileged credentials or assume the same trust boundary.

## Proposed monorepo mapping

| Concern | Initial home | Rationale |
|---|---|---|
| Existing CLI, TUI, local sessions | `packages/opencode/` | Reuse the current product runtime and provider support. |
| QraftCode-specific CLI behavior | `packages/opencode/src/kilocode/` initially, or a new `qraftcode`-named package when a clean dependency boundary is needed | Keep fork-only implementation isolated and minimize shared upstream edits. |
| Shared provider/model capability contracts | New QraftCode-owned package under `packages/` after a dependency audit | Avoid coupling the new Zen service to CLI internals. |
| Zen API, credential boundary, routing | New server package under `packages/` | Deploy and secure independently from local CLI. |
| Web product | Reuse/evaluate existing web UI packages before creating a new app | Preserve existing UI work and avoid duplicating a full stack prematurely. |
| Provider verification records | `docs/qraftcode/providers/` | Make auth, endpoint, model, limits, and capability evidence auditable. |

Names and exact package boundaries are provisional until their dependency graphs and deployment requirements are inspected.

## Shared provider contract

The shared contract should describe optional capabilities, not claim that every provider supports every operation:

- provider identity and configuration schema;
- model discovery, with provenance and refresh time;
- chat completion and streaming;
- image generation;
- vision input;
- embeddings;
- normalized errors, rate-limit metadata, and retry safety.

Adapters must be based on verified provider documentation. Unknown capabilities are unavailable, not inferred. Model IDs and API paths must not be fabricated. Provider-specific authentication stays behind a server or local credential boundary; secrets must be redacted from errors and logs.

## Zen API design

Initial compatibility surface: `GET /v1/models`, `GET /v1/providers`, `GET /v1/models/{id}`, `POST /v1/chat/completions`, `POST /v1/images/generations`, and `POST /v1/embeddings`.

Implementation sequence:

1. Define and validate request/response schemas and normalized errors.
2. Add model/provider discovery sourced from verified adapter metadata.
3. Implement one documented adapter end-to-end, including a real provider integration test where credentials are available; never substitute production mock responses.
4. Add per-request rate limits, bounded request sizes/timeouts, and safe streaming cancellation.
5. Add health-aware routing and fallback only for retry-safe errors. If fallback changes model/provider, expose that fact in response metadata and user-facing UI.
6. Add authenticated Web access, abuse controls, usage accounting, and secure credential storage before any public anonymous service.

Paid/authenticated provider keys are server-side only. Encryption at rest requires a deployment-provided key-management/envelope-encryption design, rotation procedure, access controls, and a documented recovery plan; storing plaintext or merely base64-encoding keys is unacceptable. TLS, secret redaction, request limits, and operational monitoring are required for deployment.

Anonymous access is an operational policy, not a provider feature to assume: it can only be enabled where the provider allows it and abuse/cost controls are adequate. Never promise complete anonymity; external providers may receive IP addresses, prompts, and metadata.

## Privacy defaults

- Telemetry off by default for QraftCode-owned features.
- Avoid persisting prompts in Zen unless a disclosed product feature requires it.
- Explain Web conversation retention and provide deletion controls.
- Avoid logging prompt/response bodies, authorization headers, API keys, or sensitive provider errors.
- Document data flow and third-party processing before enabling a provider.
- Keep local CLI credentials distinct from Zen-managed credentials.

## Provider validation gate

No provider from the proposed lists is certified as anonymous or implemented by this design document. Before integration, record official documentation and verify: canonical service identity, base URL and endpoints, authentication (including whether unauthenticated use is allowed), model discovery and IDs, capabilities, rate limits/quotas, data handling terms, and failure semantics. Add a live integration test where feasible. Treat `ck-` and `xpi-` only as unverified credential-format labels until the issuer and specification are established.

See `providers/README.md` for the verification workflow and status ledger.

## Phased delivery

1. Foundation: architecture, privacy/security boundaries, branding, provider verification process.
2. Core contracts: capability-aware adapter types and validation tests.
3. Verified providers: implement integrations one at a time with evidence and live tests.
4. Zen: OpenAI-compatible endpoints, server-side secrets, limits, monitoring, safe streaming.
5. CLI: QraftCode commands and provider/model discovery, keeping account optional.
6. Web: registration, chat, history/deletion, image/vision UI, and clear availability notice.
7. Routing: health-aware compatible fallback, user-visible model/provider changes.
8. Release: security review, deployment guide, provider-policy review, and end-to-end testing.

Each phase must be tested and documented before being described as complete. Provider availability, free allocations, rate limits, and terms may change; the service must communicate limitations rather than promise uninterrupted free access.
