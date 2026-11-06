export type Capability = "chat" | "streaming" | "image-generation" | "vision" | "embeddings"

export type AuthMode = "none" | "user-provided" | "managed"

export type Model = {
  readonly id: string
  readonly name: string
  readonly providerId: string
  readonly capabilities: readonly Capability[]
  readonly source: string
  readonly verifiedAt: string
}

export type Provider = {
  readonly id: string
  readonly name: string
  readonly authMode: AuthMode
  readonly documentationUrl: string
  readonly verifiedAt: string
  readonly models: readonly Model[]
}

export type ChatMessage = {
  readonly role: "system" | "user" | "assistant"
  readonly content: string
}

export type ChatRequest = {
  readonly model: string
  readonly messages: readonly ChatMessage[]
  readonly signal?: AbortSignal
}

export type ChatResponse = {
  readonly model: string
  readonly providerId: string
  readonly content: string
}

export type ProviderErrorCode =
  | "unauthorized"
  | "rate_limited"
  | "unavailable"
  | "invalid_request"
  | "unsupported_capability"
  | "unknown"

export type ProviderError = {
  readonly code: ProviderErrorCode
  readonly message: string
  readonly retryable: boolean
  readonly retryAfterMs?: number
}

export type ProviderAdapter = {
  readonly provider: Provider
  readonly discoverModels?: (signal?: AbortSignal) => Promise<readonly Model[]>
  readonly chat?: (request: ChatRequest) => Promise<ChatResponse>
  readonly streamChat?: (request: ChatRequest) => AsyncIterable<string>
  readonly generateImage?: (prompt: string, signal?: AbortSignal) => Promise<readonly string[]>
  readonly embed?: (texts: readonly string[], signal?: AbortSignal) => Promise<readonly (readonly number[])[]>
}

export type ModelFilter = {
  readonly capability?: Capability
  readonly query?: string
}

/** An in-memory catalog. Only explicitly verified, registered metadata is exposed. */
export class ProviderCatalog {
  readonly #providers = new Map<string, Provider>()

  register(provider: Provider): void {
    if (this.#providers.has(provider.id)) throw new Error(`Provider already registered: ${provider.id}`)
    this.#providers.set(provider.id, provider)
  }

  providers(): readonly Provider[] {
    return [...this.#providers.values()]
  }

  models(filter: ModelFilter = {}): readonly Model[] {
    const query = filter.query?.trim().toLocaleLowerCase()
    return this.providers()
      .flatMap((provider) => provider.models)
      .filter((model) => !filter.capability || model.capabilities.includes(filter.capability))
      .filter((model) => !query || `${model.id} ${model.name} ${model.providerId}`.toLocaleLowerCase().includes(query))
  }

  model(id: string): Model | undefined {
    return this.providers().flatMap((provider) => provider.models).find((model) => model.id === id)
  }
}
