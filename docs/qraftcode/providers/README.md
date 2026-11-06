# Provider verification ledger

This ledger is intentionally conservative. Listing a provider is not evidence that anonymous access, a free tier, OpenAI compatibility, a particular endpoint, or a model ID exists. Candidates are not routed to or advertised as available until the verification gate is complete.

## Status meanings

- **Unverified:** no official documentation reviewed for this project; do not advertise or route traffic to it.
- **Documented:** official documentation and auth/capability details recorded; implementation may still be incomplete.
- **Implemented:** adapter code and tests exist; this alone does not certify production readiness.
- **Live-tested:** tested against the actual provider API under documented conditions.

## Requested provider candidates

| Provider | Status | Evidence / notes |
|---|---|---|
| OVHcloud AI Endpoints | Unverified | Verify official API docs, account/auth requirements, free allocations/pricing, model catalog, capabilities, rate limits, and terms. |
| LLM7 | Unverified | Verify canonical official docs, authentication, whether free-tier use is available, models, capabilities, rate limits, and terms. |
| BlockRun | Unverified | Verify official API/auth documentation, pricing/free allocation, model catalog, capabilities, limits, and terms. |
| uncloseai | Unverified | Verify canonical provider identity, official API/auth documentation, pricing, model catalog, and terms. |
| UncensoredLLM.sbs | Unverified | Verify service identity, official docs, authentication, pricing/free allocation, data and safety terms, and capabilities. |
| llmtech | Unverified | Verify the intended service's canonical identity and official API/auth, pricing, model, and capability documentation. |
| AI Horde | Unverified | Verify current official API docs, access conditions, quotas, model/task availability, and terms. |
| Hetzner Inference | Unverified | Verify exact product/service identity, official API/auth docs, pricing/free allocation, model catalog, and terms. |
| ch.at | Unverified | Verify canonical service identity, official API/auth docs, pricing/free access, model catalog, and terms. |

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

## Required record for each provider

Before moving a row to **Documented**, add a provider-specific record with official source URLs, date reviewed, exact base URL and operations, authentication method, model discovery source, supported capabilities, rate limits/quotas, free-tier or pricing conditions (including whether the allocation is promotional, capped, or requires an account), retry semantics, data retention/training terms, and restrictions on proxying or resale. Cite official sources where available and clearly mark unresolved points. Free-tier usage and service stability must not be implied unless current official terms support that claim.
