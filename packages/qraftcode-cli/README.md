# QraftCode CLI — YOUR CODE. YOUR CRAFT.

`qraft` is the planned account-optional local command for QraftCode. This repository package is currently a **scaffold**, not a functional AI client: help/provider/model listing work against an intentionally empty catalog, and chat/code/image commands fail without contacting a provider.

## Current API-key support

The QraftCode CLI does not currently accept, store, or use API keys. Do not pass keys as command-line arguments; shell history and process listings can expose them. Do not put keys in project config committed to Git or paste them into chat.

The repository also includes the inherited KiloCode CLI and VS Code extension. Their provider configuration is a separate upstream-derived feature; it is not the QraftCode CLI and should only be used as a local development workaround if you understand its security and configuration behavior. See [`docs/qraftcode/api-key-setup.md`](../../docs/qraftcode/api-key-setup.md).

## Scaffold commands

From the monorepo root, with Bun installed:

```sh
bun run --cwd packages/qraftcode-cli dev -- help
bun run --cwd packages/qraftcode-cli dev -- providers
bun run --cwd packages/qraftcode-cli dev -- models
```

A future QraftCode provider setup flow will only be enabled after a real adapter and a safe credential storage approach have been implemented and tested.
