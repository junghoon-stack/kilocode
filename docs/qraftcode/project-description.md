# QraftCode 프로젝트 설명

## GitHub 저장소 짧은 설명

**YOUR CODE. YOUR CRAFT.** Open, privacy-focused AI tools with provider choice, transparent model routing, and clear free-tier availability notices.

## 한국어 소개

**QraftCode — YOUR CODE. YOUR CRAFT.**

QraftCode는 누구나 AI 모델과 Provider를 더 자유롭게 선택해 코드와 프로젝트를 만들 수 있도록 설계하는 오픈소스 AI 개발 생태계입니다. 계정 없이 사용할 수 있는 로컬 CLI, 여러 AI 서비스를 연결하는 통합 API QraftCode Zen, 계정 기반 QraftCode Web을 하나의 확장 가능한 구조로 발전시키는 것이 목표입니다.

QraftCode 사용자는 Provider API 키를 입력하지 않습니다. 운영자가 공식 문서와 이용 조건을 확인한 Provider를 서버에서 연결하고, 사용자는 실제로 사용 가능한 모델을 선택합니다. Provider 후보로 OVHcloud AI Endpoints, LLM7, BlockRun, uncloseai, UncensoredLLM.sbs, llmtech, AI Horde, Hetzner Inference, ch.at을 검토하고 있습니다. 이 목록은 제안된 후보이며, 연동 완료나 무료/익명 사용 가능을 뜻하지 않습니다.

각 Provider의 무료 사용량(Free Tier)이 실제로 제공되고 약관에서 허용되는 경우 이를 활용해 AI 접근성을 높이는 것을 목표로 합니다. 무료 티어의 특성상 API 사용량 제한, 일시적인 서비스 중단, 응답 지연, Provider 정책 변경 및 특정 모델의 일시적 이용 불가가 발생할 수 있습니다. QraftCode는 가능한 한 안정적인 서비스를 위해 노력하지만, 외부 Provider의 지속적인 가용성을 보장할 수 없습니다.

개인정보 수집을 최소화하고 자격 증명을 사용자 화면에 노출하지 않도록 설계합니다. 외부 Provider는 IP 주소, 프롬프트, 요청 및 메타데이터를 처리할 수 있으며, QraftCode는 완전한 익명성을 약속하지 않습니다.

**AI SHOULD BE FREE.** 자유롭게 선택하고, 투명하게 사용하고, 창작에 집중할 수 있는 AI 도구를 함께 만들어갑니다.

## English description

**QraftCode — YOUR CODE. YOUR CRAFT.**

QraftCode is an open-source AI development ecosystem designed to give people more choice in how they use AI to build software. It aims to connect an account-optional local CLI, QraftCode Zen, and a registered-user web product through extensible provider and model contracts.

QraftCode end users are not asked to provide provider API keys. The operator configures service-owned credentials on the server for providers whose official documentation and terms have been reviewed. OVHcloud AI Endpoints, LLM7, BlockRun, uncloseai, UncensoredLLM.sbs, llmtech, AI Horde, Hetzner Inference, and ch.at are candidates for evaluation—not verified integrations or promises of free or anonymous access.

Where providers offer free-tier allocations and their terms permit the intended use, QraftCode aims to use them to broaden access. Free-tier limits, interruptions, delays, provider policy changes, and temporary model unavailability can make the service unreliable. QraftCode works to improve availability but cannot guarantee the uptime of external providers.

The project prioritizes privacy and credential protection. External providers may process IP addresses, prompts, requests, and metadata; QraftCode does not claim complete anonymity.

**AI SHOULD BE FREE.** More choice, clearer trade-offs, and tools that help people focus on creating.

## 현재 구현 상태 안내

QraftCode는 초기 개발 단계입니다. CLI/Zen 기반 스캐폴드와 아키텍처 문서는 있지만, API 키 설정/암호화 저장, Web 계정, Provider 연동 및 서비스 운영 기능은 아직 완성되지 않았습니다. 후보 Provider는 공식 검증을 통과하기 전까지 사용할 수 있는 것으로 표시하지 않습니다.
