# Provider verification ledger

This ledger is intentionally conservative. A provider appearing here does not prove that its API is keyless, offers a free tier, is OpenAI-compatible, or permits proxying. Do not route traffic to or advertise a candidate as available until the verification gate is complete.

## Status meanings

- **Unverified:** official API/auth documentation has not been reviewed and recorded for this project; do not enable or advertise.
- **Documented:** official documentation and access conditions recorded; implementation may still be incomplete.
- **Implemented:** adapter code and tests exist; this alone does not certify production readiness.
- **Live-tested:** tested against the actual provider API under documented conditions.

## Requested candidates

| Provider | Status | Keyless status | Evidence / notes |
|---|---|---|---|
| OVHcloud AI Endpoints | Unverified | Unconfirmed | Verify official API docs, account/auth requirements, free allocations/pricing, model catalog, capabilities, rate limits, and terms. |
| LLM7 | Unverified | Unconfirmed | Verify canonical official docs, authentication, free-tier terms, models, capabilities, rate limits, and terms. |
| BlockRun | Unverified | Unconfirmed | Verify official API/auth documentation, pricing/free allocation, model catalog, capabilities, limits, and terms. |
| uncloseai | Unverified | Unconfirmed | Verify canonical provider identity, official API/auth documentation, pricing, model catalog, and terms. |
| UncensoredLLM.sbs | Unverified | Unconfirmed | Verify service identity, official docs, authentication, pricing/free allocation, data and safety terms, and capabilities. |
| llmtech | Unverified | Unconfirmed | Verify the intended service's canonical identity and official API/auth, pricing, model, and capability documentation. |
| AI Horde | Unverified | Unconfirmed | Verify current official API docs, access conditions, quotas, model/task availability, and terms. |
| Hetzner Inference | Unverified | Unconfirmed | Verify exact product/service identity, official API/auth docs, pricing/free allocation, model catalog, and terms. |
| ch.at | Unverified | Unconfirmed | Verify canonical service identity, official API/auth docs, pricing/free access, model catalog, and terms. |
| eth-legion | Unverified | Unconfirmed | User reports some endpoints may be callable without a key. Verify exact service identity, official endpoint docs, auth boundaries, limits, and terms before enabling. |
| Typhoon | Documented | Key required per official docs | Official docs: https://docs.opentyphoon.ai/en/authentication/ . The docs describe API-key authentication; do not label it keyless. Verify any product-specific exception directly with the provider. |
| IteraCompute | Unverified | Unconfirmed | User reports keyless access. No official API/auth evidence is recorded here; verify exact service, endpoint, access policy, limits, and terms. |
| Omnicall | Unverified | Ambiguous | Confirm which product is intended. Search results distinguish a claimed AI keyless service from OmiCall telecom APIs requiring a key; verify the exact official product and docs before use. |
| usefree.space | Unverified | Unconfirmed | User reports keyless access. Verify official docs, service identity, endpoints, allowed use, rate limits, and data terms. |
| Empero | Unverified | Unconfirmed | User reports keyless access. Verify exact provider identity and official API/auth documentation before use. |
| Clervo | Unverified | Unconfirmed | User reports keyless access. Verify official API documentation and whether keyless access applies to the intended models/use case. |

## Other previously proposed candidates

| Provider | Status | Evidence / notes |
|---|---|---|
| Kilo | Unverified | Verify which service/product and permitted access mode is intended. |
| OpenAPIs.online | Unverified | Verify official API documentation, authentication, and terms. |
| api.airforce | Unverified | Verify canonical provider identity and official API/auth documentation. |
| freemodel.dev | Unverified | Verify official API/auth documentation, limits, and terms. |
| LLMsRelay | Unverified | Verify official API/auth documentation and model catalog. |
| Opus Proxy | Unverified | Verify official service identity and API specification. |
| routerlab | Unverified | Verify official API/auth documentation and model catalog. |
| Opencodezen | Unverified | Verify official service identity and API specification. |
| Upstage | Unverified | Verify official API/auth documentation, models, and capabilities. |
| Ashna | Unverified | Verify canonical service identity and official API documentation. |
| Mistral | Unverified | Verify current official API/auth documentation and applicable model capabilities. |
| Groq | Unverified | Verify current official API/auth documentation and applicable model capabilities. |
| Anthropic | Unverified | Verify current official API/auth documentation and applicable model capabilities. |
| OpenRouter | Unverified | Verify current official API/auth documentation, model catalog, and provider-routing semantics. |
| AI1API | Unverified | Verify canonical provider identity and official API/auth documentation. |

## Credential labels

`ck-` and `xpi-` are unverified format labels only. Do not parse, validate, transmit, or present them as supported credentials until the issuing provider and official authentication specification have been identified.

## Required verification record

Before moving a row to **Documented**, add provider-specific official source URLs, date reviewed, exact base URL and operations, authentication method (including whether keyless calls are explicitly permitted), model discovery source, supported capabilities, rate limits/quotas, free-tier or pricing conditions (including account requirements and caps), retry semantics, data retention/training terms, and restrictions on proxying or resale. Cite official sources where available and clearly mark unresolved points. Do not infer keyless access from a working browser endpoint, a community SDK, or user reports alone.

## Free-tier availability notice

QraftCode plans to use provider free-tier allocations where they are actually offered and the provider terms permit the intended service use. Free tiers may be limited, delayed, interrupted, changed, or withdrawn. Do not claim that every candidate offers a free tier. Availability must reflect verified provider status and live health checks; fallback must disclose meaningful model/provider changes to users.
