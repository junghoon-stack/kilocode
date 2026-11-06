# QraftCode

**YOUR CODE. YOUR CRAFT.**  
**AI SHOULD BE FREE.**

QraftCode는 누구나 AI 모델과 Provider를 더 자유롭게 선택해 코드와 프로젝트를 만들 수 있도록 설계하는 오픈소스 AI 개발 생태계입니다. 계정 없이 사용할 수 있는 로컬 CLI, 여러 AI 서비스를 연결하는 통합 API **QraftCode Zen**, 계정 기반 **QraftCode Web**을 하나의 확장 가능한 구조로 발전시키는 것이 목표입니다.

특정 AI 사업자에 고정되지 않는 선택권, 개인정보 최소 수집, 자격 증명 보호, Provider 지원 현황의 투명한 검증을 중요하게 생각합니다. 외부 Provider는 요청, IP 주소 및 메타데이터를 처리할 수 있으며, QraftCode는 완전한 익명성을 보장한다고 주장하지 않습니다.

## 개발 상태

프로젝트는 초기 개발 중입니다. 현재 저장소에는 QraftCode 아키텍처와 브랜드 자료, Provider 계약 스캐폴드, CLI/Zen 개발용 골격, Web 설정 화면 미리보기가 있습니다. 이들은 완성된 제품이 아닙니다. Provider 연동과 API 키 설정, 계정/인증, 암호화된 키 저장, 실제 Web 채팅, 이미지/비전, 배포 및 운영 기능은 아직 구현·검증되지 않았습니다. 검증되지 않은 Provider는 지원/익명으로 표시하지 않으며, 스캐폴드는 실제 AI 응답을 가장하지 않습니다.

## API 키를 어디에 입력하나요?

**현재 QraftCode에는 실제 API 키를 입력할 수 있는 안전한 기능이 없습니다.** Web 화면의 키 입력/저장 버튼은 비활성화되어 있고 CLI/Zen도 실제 Provider 인증을 처리하지 않습니다. API 키를 이 채팅에 보내거나 코드/저장소에 커밋하지 마세요.

자세한 현황과 기존 개발용 KiloCode 기능의 제한적인 사용 방법은 [`docs/qraftcode/api-key-setup.md`](docs/qraftcode/api-key-setup.md)를 확인하세요. 기존 KiloCode Provider 화면을 사용하는 것은 아직 QraftCode API 연동 기능이 아닙니다.

## 제품과 문서

- [`docs/qraftcode/project-description.md`](docs/qraftcode/project-description.md) — 한국어/영어 소개
- [`docs/qraftcode/architecture.md`](docs/qraftcode/architecture.md) — 제품 경계 및 아키텍처
- [`docs/qraftcode/branding-migration.md`](docs/qraftcode/branding-migration.md) — 안전한 KiloCode 기반 전환 방침
- [`docs/qraftcode/providers/README.md`](docs/qraftcode/providers/README.md) — Provider 검증 현황
- [`docs/qraftcode/assets/qraftcode-logo.svg`](docs/qraftcode/assets/qraftcode-logo.svg) — 제공된 로고
- [`apps/qraftcode-web/`](apps/qraftcode-web/) — 정적 Web 설정 UI 미리보기
- [`packages/qraftcode-cli/`](packages/qraftcode-cli/) — 초기 CLI 스캐폴드
- [`packages/qraftcode-zen/`](packages/qraftcode-zen/) — 로컬 개발용 Zen API 골격

## 개발 스캐폴드 실행

저장소의 개발 환경(Bun)이 준비된 뒤 루트에서:

```sh
bun run --cwd packages/qraftcode-cli dev -- help
bun run --cwd packages/qraftcode-zen dev
```

Web 설정 미리보기는 `apps/qraftcode-web/index.html`을 브라우저로 열면 됩니다. 이 화면은 정적 HTML이며 API와 통신하지 않고 키를 저장하지 않습니다. Zen은 개발용 루프백 서버이며 공개 네트워크에 노출하면 안 됩니다.

## 라이선스 및 출처

QraftCode는 MIT 라이선스 KiloCode 저장소를 기반으로 한 개발 프로젝트입니다. 원본 LICENSE, 저작권 및 제3자 고지 사항을 보존합니다. 브랜딩 전환 계획은 [`docs/qraftcode/branding-migration.md`](docs/qraftcode/branding-migration.md)를 참조하세요.
