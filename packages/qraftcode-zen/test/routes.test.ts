import { describe, expect, test } from "bun:test"
import { ProviderCatalog } from "@qraftcode/core"

const catalog = new ProviderCatalog()

const route = async (path: string, method = "GET") => {
  const url = new URL(path, "http://localhost")
  if (method === "GET" && url.pathname === "/v1/providers") {
    return Response.json({ data: catalog.providers().map(({ id, name }) => ({ id, name, status: "unavailable" })) })
  }
  if (method === "GET" && url.pathname === "/v1/models") {
    return Response.json({ object: "list", data: catalog.models() })
  }
  if (method === "POST" && ["/v1/chat/completions", "/v1/images/generations", "/v1/embeddings"].includes(url.pathname)) {
    return Response.json(
      { error: { type: "service_unavailable", code: "no_verified_provider" } },
      { status: 503 },
    )
  }
  return Response.json({ error: { type: "not_found" } }, { status: 404 })
}

describe("Zen scaffold behavior", () => {
  test("does not advertise unconfigured providers or models", async () => {
    expect(await (await route("/v1/providers")).json()).toEqual({ data: [] })
    expect(await (await route("/v1/models")).json()).toEqual({ object: "list", data: [] })
  })

  test("does not return fake generation output", async () => {
    const response = await route("/v1/chat/completions", "POST")
    expect(response.status).toBe(503)
    expect(await response.json()).toMatchObject({ error: { code: "no_verified_provider" } })
  })
})
