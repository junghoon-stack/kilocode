# Provider verification ledger

This ledger is intentionally conservative. Listing a provider is not evidence that anonymous access, OpenAI compatibility, a particular endpoint, or a model ID exists.

## Status meanings

- **Unverified:** no official documentation reviewed for this project; do not advertise or route traffic to it.
- **Documented:** official documentation and auth/capability details recorded; implementation may still be incomplete.
- **Implemented:** adapter code and tests exist; this alone does not certify production readiness.
- **Live-tested:** tested against the actual provider API under documented conditions.

## Anonymous provider candidates

| Provider | Status | Evidence / notes |
|---|---|---|
| LLM7 | Unverified | Verify official docs, unauthenticated access, models, capabilities, limits, and terms. |
| Kilo | Unverified | Verify which service/product and permitted access mode is intended. |
| OVHcloud AI Endpoints | Unverified | Verify current official API and authentication requirements. |
| BlockRun | Unverified | Verify official API documentation and access policy. |
| UncensoredLLM.sbs | Unverified | Verify service identity, official docs, auth, and safety/data terms. |
| uncloseai | Unverified | Verify canonical provider identity and official API documentation. |
| AI Horde | Unverified | Verify current API, access conditions, quotas, and supported task types. |
| OpenAPIs.online | Unverified | Verify official API documentation, authentication, and terms. |

## Managed-credential provider candidates

| Provider | Status | Evidence / notes |
|---|---|---|
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

## Required record for each provider

Before moving a row to **Documented**, add a provider-specific record with official source URLs, date reviewed, exact base URL and operations, authentication method, model discovery source, supported capabilities, rate limits/quotas, retry semantics, data retention/training terms, and any restrictions on proxying or resale. Cite only official sources where available and clearly mark unresolved points.
