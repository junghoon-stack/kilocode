# QraftCode: 브랜딩 및 제품 전환 원칙

## 제품 정체성

- 제품명: **QraftCode**
- CLI 명령: **`qraft`**
- 통합 API: **QraftCode Zen**
- 웹 제품: **QraftCode Web**
- 메인 슬로건: **YOUR CODE. YOUR CRAFT.**
- 보조 슬로건: **AI SHOULD BE FREE.**
- 브랜드 로고 원본: [`assets/qraftcode-logo.svg`](assets/qraftcode-logo.svg)

## 왜 한 번에 `kilo` 전체 문자열을 바꾸지 않는가

이 저장소는 KiloCode를 기반으로 한 큰 모노레포입니다. 사용자에게 노출되는 이름뿐 아니라 내부 패키지 이름, CLI 실행파일, 설정 키, 저장 데이터, Provider ID, 업데이트/마켓플레이스 주소, 빌드·릴리스·배포 자동화가 서로 연결되어 있습니다. 문자열을 일괄 치환하면 기존 설정을 읽지 못하거나 앱 빌드, 업데이트, provider 인증, 서명 및 배포가 깨질 수 있습니다.

따라서 QraftCode 고유 기능과 화면부터 QraftCode 이름으로 구현하고, 기존 Kilo/OpenCode 코드의 이름은 실제 호환성·마이그레이션 테스트가 준비된 컴포넌트만 단계적으로 변경합니다. 이는 제품 브랜딩을 미루자는 뜻이 아니라, 사용자의 데이터와 빌드를 보호하면서 전환하자는 뜻입니다.

## 변경 순서

1. QraftCode 설명, 로고, 문서, 새 CLI 명령과 Zen/Web UI를 QraftCode 브랜드로 유지합니다.
2. 기존 Provider 설정/API 인증 기능을 QraftCode에 연결할 수 있는지 별도 확인하고, 사용자가 API 키를 넣는 경로를 문서화합니다.
3. QraftCode 명령과 패키지를 기존 런타임에 연결하고 CLI/API 통합 테스트를 추가합니다.
4. VS Code/JetBrains 표시명, 아이콘, 설정 키, 확장 ID와 패키지명을 각각 마이그레이션합니다. 필요하면 기존 이름/설정에서 이전하는 절차를 둡니다.
5. CI, installer, release channels, update URL, marketplace listing, telemetry 및 문서 링크를 새 브랜드로 전환합니다.
6. 각 단계에서 회귀 검사와 기존 사용자 설정 이전 테스트를 완료한 뒤에만 기존 표시를 제거합니다.

## 라이선스와 출처

이 프로젝트는 MIT 라이선스 KiloCode 코드를 기반으로 발전합니다. 기존 LICENSE, 저작권 및 제3자 고지 사항을 보존하고, QraftCode의 변경 사항과 원본 코드의 출처를 분명히 표시합니다. QraftCode 브랜드를 사용해도 원본 저작권 고지가 사라지는 것은 아닙니다.

## 완료 기준

브랜드 전환은 README 제목만 바꾼 것으로 완료되지 않습니다. CLI 실행, 설치/업데이트, 확장 화면, provider 인증, 설정 파일 호환, 로고/아이콘, API 문서와 릴리스 파이프라인이 QraftCode로 검증되어야 합니다. 현재 단계에서는 문서와 신규 QraftCode 스캐폴드가 마련되었으며, 전체 런타임 전환은 미완료입니다.
