# QraftCode 프로젝트 설명

## GitHub 저장소 짧은 설명

**YOUR CODE. YOUR CRAFT.** Open, privacy-focused AI coding tools built around provider choice, transparent model routing, and extensible integrations.

## 한국어 소개

**QraftCode — YOUR CODE. YOUR CRAFT.**

QraftCode는 누구나 자신의 방식으로 AI를 선택하고 코드를 만들 수 있도록 설계하는 오픈소스 AI 개발 생태계입니다. 단일 AI 사업자에 종속되지 않는 확장 가능한 Provider 구조를 지향하며, CLI·통합 API(QraftCode Zen)·웹 제품을 공통 모델 및 기능 계약으로 연결합니다.

개인 개발자는 QraftCode 계정 없이 로컬 CLI를 사용할 수 있도록 하고, 웹 제품은 계정 기반으로 대화와 모델 선택을 제공하는 방향으로 설계합니다. Provider 지원 여부와 모델 기능은 공식 문서로 확인한 뒤 공개하며, 검증되지 않은 익명 접근이나 실제 연동을 지원한다고 주장하지 않습니다.

개인정보 보호를 위해 수집을 최소화하고, Provider 자격 증명을 클라이언트에 노출하지 않으며, 외부 Provider가 IP 주소·요청·메타데이터를 처리할 수 있음을 명확히 알립니다. 무료 티어에 의존하는 경우 사용량 제한, 지연, 일시 중단, 정책 변경 및 모델 이용 불가가 발생할 수 있습니다.

**AI SHOULD BE FREE.** 자유롭게 선택하고, 투명하게 사용하고, 창작에 집중할 수 있는 AI 도구를 함께 만들어갑니다.

## English description

**QraftCode — YOUR CODE. YOUR CRAFT.**

QraftCode is an open-source AI development ecosystem designed to give people more choice in how they use AI to build software. It aims to connect an account-optional local CLI, QraftCode Zen (a unified API), and a registered-user web product through extensible provider and model contracts—without locking the project to a single AI provider.

Provider support, model identifiers, authentication requirements, and capabilities are verified against official documentation before being presented as available. QraftCode does not claim that unverified services provide anonymous access. Privacy is a design priority: collect less, keep provider credentials out of clients, and explain that external providers may process IP addresses, requests, and metadata.

Where free-tier allocations are used, limits, delays, temporary outages, provider policy changes, and model unavailability may occur. The project is being built incrementally; documented plans and scaffolds are not claims of completed integrations.

**AI SHOULD BE FREE.** More choice, clearer trade-offs, and tools that help people focus on creating.

## 현재 구현 상태 안내

QraftCode는 초기 개발 단계입니다. CLI/Zen 기반 스캐폴드와 아키텍처 문서는 있지만, API 키 설정/암호화 저장, Web 계정, Provider 연동 및 서비스 운영 기능은 아직 완성되지 않았습니다. 프로젝트 설명을 게시할 때 완성된 제품이나 모든 Provider가 실제 동작한다고 오해되지 않도록 이 상태를 함께 알립니다.
