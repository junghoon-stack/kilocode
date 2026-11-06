# QraftCode provider availability and admin credentials

QraftCode end users are not asked to provide provider API keys. Once integrations are verified and implemented, operators will configure service credentials in the deployment's Secret Manager. The current Zen scaffold has no provider adapter or secret loader, so it cannot use a key that may already have been added to GitHub or another deployment dashboard.

QraftCode plans to use provider free-tier allocations where they are genuinely offered and provider terms allow it. Free quotas and service availability can change; users may experience usage limits, interruptions, latency, policy changes, or temporary model unavailability. We do not claim every candidate is free, keyless, or stable.

The requested candidates and current verification statuses are tracked in [`providers/README.md`](providers/README.md). Verify exact service, official endpoint/authentication docs, quotas, capabilities, and terms before enabling each adapter. Never place secrets in this repository or chat. If a key has been committed or disclosed publicly, revoke it and issue a replacement.
