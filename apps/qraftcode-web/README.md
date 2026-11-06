# QraftCode Web UI preview

This static, responsive settings-page preview shows the planned provider/model availability UI. It is not connected to a backend.

QraftCode end users are **not** asked to supply provider API keys. After official provider documentation, terms, and adapter behavior are verified, QraftCode operators configure service-owned credentials through the deployment Secret Manager. The current Zen scaffold has no such integration, so no key can be registered yet. The preview has no key input and does not send or store secrets.

Provider candidates shown in the UI: OVHcloud AI Endpoints, LLM7, BlockRun, uncloseai, UncensoredLLM.sbs, llmtech, AI Horde, Hetzner Inference, ch.at, eth-legion, Typhoon, IteraCompute, Omnicall, usefree.space, Empero, and Clervo. All remain unverified and unavailable in QraftCode until reviewed and tested. Typhoon's official authentication documentation describes API-key authentication: https://docs.opentyphoon.ai/en/authentication/. Omnicall is ambiguous; confirm the intended product/API. The other reported keyless access claims are not treated as verified without official documentation. Listing a provider does not establish that it offers free tiers or anonymous access.

QraftCode aims to use free-tier allocations where available and permitted by provider terms. Usage limits, interruptions, delays, policy changes, or model unavailability may affect service reliability. See [`docs/qraftcode/admin-provider-credentials.md`](../../docs/qraftcode/admin-provider-credentials.md) and [`docs/qraftcode/providers/README.md`](../../docs/qraftcode/providers/README.md).
