# QraftCode API 키 설정 현황

## 제품 정책

QraftCode 사용자는 자신의 Provider API 키를 입력하지 않습니다. **QraftCode 운영자가 서비스용 Provider 자격 증명을 관리합니다.** 사용자는 QraftCode 계정과 서비스가 제공하는 모델을 사용합니다. API 키 입력 UI를 사용자에게 보여주거나 입력을 요구하는 것이 목표가 아닙니다.

## 현재 구현 상태

현재 QraftCode CLI는 안내/목록 스캐폴드이고, Web 설정 화면은 정적 미리보기이며, Zen에는 실제 Provider 어댑터나 관리자 키 로더가 없습니다. 사용자는 물론 운영자도 현재 QraftCode 제품을 통해 키를 등록하거나 모델 요청을 보낼 수 없습니다. UI 미리보기에는 키 입력란이 없으며, 키를 채팅·코드·저장소에 넣지 마세요.

## 운영자 방식의 예정 설계

Provider 공식 API 문서와 연동을 검증한 다음, 운영자가 자신의 서비스용 키를 프로덕션 배포 환경의 Secret Manager에 보관합니다. Zen 서버의 검증된 어댑터만 접근하고, 키는 Web 클라이언트·API 응답·로그에 노출하지 않습니다. provider별 인증 변수 이름이나 endpoint는 공식 문서 확인 전에는 지정하지 않습니다. 자세한 내용은 [`admin-provider-credentials.md`](admin-provider-credentials.md)를 확인하세요.

## 개발용 KiloCode 기능과 구별

기존 KiloCode VS Code 확장 및 CLI에 Provider 설정 기능이 있을 수 있으나, 그 설정은 해당 기존 클라이언트에 대한 것입니다. QraftCode 운영자 서버 설정이 아니며 QraftCode 사용자가 입력할 키를 요구한다는 의미도 아닙니다. 이 프로젝트는 아직 KiloCode 런타임을 QraftCode 제품으로 완전히 전환하지 않았습니다.

## 보안 안내

이 대화에 API 키를 보내지 마세요. 키를 공개 채팅, 코드, 스크린샷 또는 공개 Git 저장소에 노출했다면 Provider 대시보드에서 즉시 폐기하고 새 키를 발급하세요. 실제 운영 설정 기능은 Secret Manager, 서버 접근 제어, 키 회전/폐기, 로그 redaction, rate limiting, TLS 및 provider별 실제 API 테스트가 구현된 후에만 활성화합니다.
