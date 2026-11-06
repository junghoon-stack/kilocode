# QraftCode foundation status

QraftCode is an evolving project based on the MIT-licensed KiloCode repository. Preserve upstream license and attribution notices.

## Added in the foundation phase

- Architecture and provider-verification documentation: [`docs/qraftcode/architecture.md`](architecture.md), [`docs/qraftcode/providers/README.md`](providers/README.md).
- The supplied brand SVG: [`docs/qraftcode/assets/qraftcode-logo.svg`](assets/qraftcode-logo.svg).
- Provider-neutral capability contracts and an in-memory explicit catalog: `packages/qraftcode-core/`.
- A local CLI scaffold: `packages/qraftcode-cli/`.
- A loopback-only Zen API development scaffold: `packages/qraftcode-zen/`.
- Web product/security implementation plan: [`apps/qraftcode-web/README.md`](../../apps/qraftcode-web/README.md).
- API settings UX/security requirements: [`docs/qraftcode/api-settings-ux.md`](api-settings-ux.md).
- Korean and English project descriptions: [`docs/qraftcode/project-description.md`](project-description.md).

## Current limitations

No third-party provider is verified or wired into the QraftCode catalog. CLI generation commands therefore fail explicitly; Zen generation endpoints return `503 no_verified_provider`. The Zen scaffold rejects production startup and only binds to loopback. Authentication, API-key encryption, public anonymous access, rate limiting, usage accounting, live model discovery, streaming, image generation, embeddings, Web login/chat/history, and fallback routing are not implemented. The API settings document describes future UX and does not provide a working key entry or storage feature. Do not deploy these scaffolds as a public service.

Run package checks from the repository root:

```sh
bun run --cwd packages/qraftcode-core typecheck
bun run --cwd packages/qraftcode-core test
bun run --cwd packages/qraftcode-cli typecheck
bun run --cwd packages/qraftcode-zen typecheck
bun run --cwd packages/qraftcode-zen test
```
