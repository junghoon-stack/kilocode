# QraftCode Web UI preview

This static, responsive settings-page preview shows the planned provider/model availability UI. It is not connected to a backend.

QraftCode end users are **not** asked to supply provider API keys. After official provider documentation, terms, and adapter behavior are verified, QraftCode operators will configure service-owned credentials through the deployment Secret Manager. The current Zen scaffold has no such integration, so no key can be registered yet. The preview has no key input and does not send or store secrets.

Provider candidates shown in the UI: OVHcloud AI Endpoints, LLM7, BlockRun, uncloseai, UncensoredLLM.sbs, llmtech, AI Horde, Hetzner Inference, and ch.at. All remain unverified and unavailable in QraftCode until reviewed and tested. Their listing does not establish that they offer free tiers or anonymous access.

The UI explains that where a provider's free-tier allocation is available and the provider terms permit its use, limits, interruptions, latency, policy changes, or model unavailability may affect service reliability. See [`docs/qraftcode/admin-provider-credentials.md`](../../docs/qraftcode/admin-provider-credentials.md) and [`docs/qraftcode/providers/README.md`](../../docs/qraftcode/providers/README.md).
