# QraftCode CLI scaffold

The package registers the local `qraft` command and currently supports help, provider listing, and model listing. The catalog is deliberately empty until a provider has passed the official-documentation verification gate. Chat/code/image commands fail explicitly instead of presenting mock output.

No QraftCode account is required for local CLI use. Provider credentials and actual integrations are not implemented yet.

Run from the monorepo root with `bun run --cwd packages/qraftcode-cli dev -- help`.
