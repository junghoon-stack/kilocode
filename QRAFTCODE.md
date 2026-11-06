# QraftCode

**YOUR CODE. YOUR CRAFT.**  
**AI SHOULD BE FREE.**

QraftCode는 누구나 AI 모델과 Provider를 더 자유롭게 선택해 코드와 프로젝트를 만들 수 있도록 설계하는 오픈소스 AI 개발 생태계입니다. 계정 없이 사용할 수 있는 로컬 CLI, 여러 AI 서비스를 연결하는 통합 API **QraftCode Zen**, 계정 기반 **QraftCode Web**을 하나의 확장 가능한 구조로 발전시키는 것이 목표입니다.

QraftCode 사용자는 Provider API 키를 입력하지 않습니다. 운영자가 검증한 서비스용 자격 증명을 서버 환경에서 관리하고, 사용자는 제공 가능한 모델을 선택하도록 설계합니다. 외부 Provider는 IP 주소, 요청 및 메타데이터를 처리할 수 있으며 QraftCode는 완전한 익명성을 보장하지 않습니다.

## Provider 및 서비스 안정성

검토 후보: OVHcloud AI Endpoints, LLM7, BlockRun, uncloseai, UncensoredLLM.sbs, llmtech, AI Horde, Hetzner Inference, ch.at, eth-legion, Typhoon, IteraCompute, Omnicall, usefree.space, Empero, Clervo.

이 후보 목록은 실제 연동이나 keyless 사용을 확인한 것이 아닙니다. Typhoon 공식 인증 문서는 API 키를 요구하며, 키리스로 분류하지 않습니다. Omnicall은 정확한 제품/API를 확인해야 합니다. 다른 키리스 접근 주장도 공식 문서로 검증하기 전까지 미확인입니다. QraftCode는 Provider가 무료 사용량을 실제 제공하고 약관이 허용하는 경우 Free Tier를 활용하는 것을 목표로 합니다. 무료 티어 한도, 중단, 지연, 정책 변경 또는 모델 이용 불가로 서비스가 불안정할 수 있으며, 모든 후보에 무료 티어가 있다고 보장하지 않습니다.

## 개발 상태

프로젝트는 초기 개발 중입니다. 현재 저장소에는 QraftCode 아키텍처와 브랜드 자료, Provider 계약 스캐폴드, CLI/Zen 개발용 골격, Web 설정 화면 미리보기가 있습니다. 이들은 완성된 제품이 아닙니다. 실제 Provider 연동, 운영자 자격 증명 로더, 계정/인증, 암호화된 키 저장, 실제 Web 채팅, 배포 및 운영 기능은 아직 구현·검증되지 않았습니다. 검증되지 않은 Provider는 지원/익명으로 표시하지 않으며, 스캐폴드는 실제 AI 응답을 가장하지 않습니다.

API 키 설정과 보안 안내는 [`docs/qraftcode/admin-provider-credentials.md`](docs/qraftcode/admin-provider-credentials.md)를 참고하세요. API 키를 채팅이나 코드/저장소에 보내지 마세요.
