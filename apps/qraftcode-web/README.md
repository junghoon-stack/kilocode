# QraftCode Web: implementation plan

The existing repository contains UI and web-oriented packages, but no verified QraftCode Web application or authentication deployment configuration. Do not present a static chat mock as a working product.

## Product requirements

- Registration and login are required for Web users.
- Authenticated sessions call Zen; browser code must never receive managed provider credentials.
- Support model selection, streaming, conversation history, deletion, and capability-aware image/vision UI only when backed by implemented APIs.
- Retention, deletion behavior, provider processing, and free-tier availability must be disclosed in the UI.
- Design system: `#101010` background, `#C5F36A` lime accent, `#F5F5F5` text, `#888888` secondary text; brand QraftCode, “YOUR CODE. YOUR CRAFT.”

## Implementation gate

Before building login or persistence, choose the identity provider, session/cookie strategy, database, deployment environment, retention policy, and abuse controls. Then reuse or extend the repository's existing web UI packages where that is a good fit. Do not build an auth screen that suggests successful registration without a functioning, secured identity backend.

## Availability notice

Display the required Korean and English free-tier notices from the project specification before users start conversations and in service documentation. Free allocations are subject to limits, interruptions, delays, provider policy changes, and model availability changes.

External providers may process a user's IP address, prompts, and metadata. QraftCode must not claim complete anonymity.
