# QraftCode foundation status

QraftCode is an evolving project based on the MIT-licensed KiloCode repository. Preserve upstream license and attribution notices.

## Added in the foundation phase

- Architecture, provider verification, and branding migration documentation under [`docs/qraftcode/`](./).
- The supplied brand SVG: [`docs/qraftcode/assets/qraftcode-logo.svg`](assets/qraftcode-logo.svg).
- Provider-neutral capability contracts and an in-memory explicit catalog: `packages/qraftcode-core/`.
- A local CLI scaffold: `packages/qraftcode-cli/` (no provider calls yet).
- A loopback-only Zen API development scaffold: `packages/qraftcode-zen/` (no provider adapters or admin secret loader; not for deployment).
- Responsive Web model settings UI preview: [`apps/qraftcode-web/index.html`](../../apps/qraftcode-web/index.html); there is no user API-key field.
- Korean and English project descriptions and a root QraftCode introduction: [`docs/qraftcode/project-description.md`](project-description.md), [`QRAFTCODE.md`](../../QRAFTCODE.md).
- Administrator-only provider credential policy: [`docs/qraftcode/admin-provider-credentials.md`](admin-provider-credentials.md).

## Current limitations

No third-party provider is verified or wired into the QraftCode catalog. CLI generation commands therefore fail explicitly; Zen generation endpoints return `503 no_verified_provider`. The Zen scaffold rejects production startup and only binds to loopback. Authentication, administrator secret loading/storage, provider adapters, public anonymous access, rate limiting, usage accounting, live model discovery, streaming, image generation, embeddings, Web login/chat/history, and fallback routing are not implemented. QraftCode users do not provide Provider keys; administrators also cannot configure keys through QraftCode yet. Do not deploy these scaffolds as a public service. The inherited KiloCode runtime remains a separate, upstream-derived product surface; a complete brand/identifier migration is not finished.

Run the package checks from the repository root:

```sh
bun run --cwd packages/qraftcode-core typecheck
bun run --cwd packages/qraftcode-core test
bun run --cwd packages/qraftcode-cli typecheck
bun run --cwd packages/qraftcode-zen typecheck
bun run --cwd packages/qraftcode-zen test
```
