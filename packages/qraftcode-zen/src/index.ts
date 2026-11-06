import { createServer } from "node:http"
import { ProviderCatalog } from "@qraftcode/core"

const catalog = new ProviderCatalog()
const host = process.env.QRAFTCODE_ZEN_HOST ?? "127.0.0.1"
const port = Number(process.env.QRAFTCODE_ZEN_PORT ?? "8787")

if (process.env.NODE_ENV === "production") {
  console.error("QraftCode Zen scaffold is not production-ready: authentication, TLS, rate limits, and providers are not configured.")
  process.exit(1)
}

if (!new Set(["127.0.0.1", "::1", "localhost"]).has(host)) {
  console.error("QraftCode Zen development server only binds to loopback. Do not expose it to a network.")
  process.exit(1)
}

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("QRAFTCODE_ZEN_PORT must be an integer between 1 and 65535.")
  process.exit(1)
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  })

const app = async (request: Request): Promise<Response> => {
  const url = new URL(request.url)
  if (request.method === "GET" && url.pathname === "/healthz") return json({ status: "ok" })
  if (request.method === "GET" && url.pathname === "/v1/providers") {
    return json({ data: catalog.providers().map(({ id, name }) => ({ id, name, status: "unavailable" })) })
  }
  if (request.method === "GET" && url.pathname === "/v1/models") {
    return json({ object: "list", data: catalog.models().map((model) => ({ id: model.id, object: "model", owned_by: model.providerId })) })
  }
  if (request.method === "GET" && url.pathname.startsWith("/v1/models/")) {
    const id = decodeURIComponent(url.pathname.slice("/v1/models/".length))
    const model = catalog.model(id)
    if (!model) return json({ error: { type: "not_found", message: "Model not found." } }, 404)
    return json({ id: model.id, object: "model", owned_by: model.providerId })
  }
  if (
    request.method === "POST" &&
    ["/v1/chat/completions", "/v1/images/generations", "/v1/embeddings"].includes(url.pathname)
  ) {
    return json(
      {
        error: {
          type: "service_unavailable",
          code: "no_verified_provider",
          message: "No verified provider is configured. This scaffold does not generate mock responses.",
        },
      },
      503,
    )
  }
  return json({ error: { type: "not_found", message: "Route not found." } }, 404)
}

const server = createServer(async (req, res) => {
  const chunks: Uint8Array[] = []
  for await (const chunk of req) chunks.push(chunk)
  const body = Buffer.concat(chunks)
  const request = new Request(`http://${host}:${port}${req.url ?? "/"}`, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: ["GET", "HEAD"].includes(req.method ?? "GET") || body.byteLength === 0 ? undefined : body,
  })
  const response = await app(request)
  res.writeHead(response.status, Object.fromEntries(response.headers.entries()))
  res.end(await response.text())
})

server.listen(port, host, () => {
  console.log(`QraftCode Zen development scaffold listening on http://${host}:${port}`)
  console.log("No provider adapters are configured; generation endpoints return 503 rather than mock output.")
})
