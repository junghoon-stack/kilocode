# QraftCode Web UI preview

This static, responsive settings-page preview shows the planned provider/model availability UI. It is not connected to a backend.

QraftCode end users are **not** asked to supply provider API keys. QraftCode operators configure service-owned credentials through a deployment Secret Manager after verified provider adapters and secure server-side loading exist. The current Zen scaffold has no such integration, so no key can be registered yet. The preview intentionally has no key input field and does not send or store secrets.

See [`docs/qraftcode/admin-provider-credentials.md`](../../docs/qraftcode/admin-provider-credentials.md) and [`docs/qraftcode/api-key-setup.md`](../../docs/qraftcode/api-key-setup.md).
