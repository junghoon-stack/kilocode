import { describe, expect, test } from "bun:test"
import { ProviderCatalog } from "../src/index"

const catalog = () => {
  const result = new ProviderCatalog()
  result.register({
    id: "sample",
    name: "Sample provider",
    authMode: "user-provided",
    documentationUrl: "https://example.invalid/docs",
    verifiedAt: "2026-01-01",
    models: [
      {
        id: "sample-chat",
        name: "Sample Chat",
        providerId: "sample",
        capabilities: ["chat", "streaming"],
        source: "verified-test-fixture",
        verifiedAt: "2026-01-01",
      },
    ],
  })
  return result
}

describe("ProviderCatalog", () => {
  test("filters models by declared capability and query", () => {
    expect(catalog().models({ capability: "streaming", query: "sample" }).map((model) => model.id)).toEqual([
      "sample-chat",
    ])
    expect(catalog().models({ capability: "vision" })).toEqual([])
  })

  test("rejects duplicate provider IDs", () => {
    const result = catalog()
    expect(() =>
      result.register({
        id: "sample",
        name: "Duplicate",
        authMode: "none",
        documentationUrl: "https://example.invalid/docs",
        verifiedAt: "2026-01-01",
        models: [],
      }),
    ).toThrow("Provider already registered: sample")
  })
})
