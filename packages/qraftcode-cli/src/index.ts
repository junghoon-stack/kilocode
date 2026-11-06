#!/usr/bin/env bun
import { ProviderCatalog } from "@qraftcode/core"

const catalog = new ProviderCatalog()
const args = process.argv.slice(2)
const command = args[0] ?? "help"

if (["help", "--help", "-h"].includes(command)) {
  console.log(`QraftCode — YOUR CODE. YOUR CRAFT.\n\nUsage: qraft <command>\n\nCommands:\n  providers       List verified, configured providers\n  models [query]  Search the verified model catalog\n  ask <prompt>    Ask a configured provider (not available until one is integrated)\n\nNo QraftCode account is required for local CLI use.`)
  process.exit(0)
}

if (command === "providers") {
  const providers = catalog.providers()
  console.log(providers.length ? providers.map((provider) => `${provider.id} — ${provider.name}`).join("\n") : "No verified providers are configured yet.")
  process.exit(0)
}

if (command === "models") {
  const query = args.slice(1).join(" ")
  const models = catalog.models({ query })
  console.log(models.length ? models.map((model) => `${model.id} — ${model.name}`).join("\n") : "No verified models are available yet.")
  process.exit(0)
}

if (command === "ask" || command === "chat" || command === "code" || command === "image") {
  console.error("No verified provider is configured. QraftCode will not return a mock response.")
  process.exit(2)
}

console.error(`Unknown command: ${command}. Run 'qraft --help' for usage.`)
process.exit(2)
