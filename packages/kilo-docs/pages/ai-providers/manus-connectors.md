---
title: "Manus API Connectors"
description: "Map enabled Manus API connectors to Kilo Code providers without committing secrets."
sidebar_label: Manus Connectors
---

# Manus API Connectors

이 페이지는 Manus 세션에서 활성화된 API 커넥터를 Kilo Code Provider로 연결할 때 사용하는 이름과 설정 경계를 정리합니다. **API 키 값은 저장소에 넣지 않습니다.** 키는 로컬 비밀 저장소, CI secret, 또는 실행 환경의 환경 변수로만 주입하세요.

## 현재 활성 커넥터

현재 Manus에서 `enabled`로 확인된 API 커넥터는 다음과 같습니다.

| 커넥터 이름 | Kilo 연결 방식 | 상태 |
|---|---|---|
| `Anthropic` | Native Anthropic Messages Provider | 바로 사용 가능 |
| `Groq` | Native Groq Provider | 바로 사용 가능 |
| `미스트랄` | Native Mistral Provider | 바로 사용 가능 |
| `오픈라우터` | Native OpenRouter Provider | 바로 사용 가능 |
| `업스테이지` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `Ai1api` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `Api.airforce` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `Ashna` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `CHUIZI_API_KEY` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `Freemodel.dev` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `LLMsRelay` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `OPPER_API_KEY` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |
| `routerlab` | OpenAI-compatible Custom Provider | Base URL 확인 필요 |

`GitHub`는 활성화된 Manus 내장 커넥터이지만 모델 Provider가 아닙니다. 저장소·브랜치·커밋 관리에 사용합니다.

## Native Provider 설정

Kilo의 native Provider를 사용할 때는 API 키를 `kilo.json`에 직접 넣지 말고 환경 변수로 지정합니다.

```jsonc
{
  "provider": {
    "groq": {
      "env": ["GROQ_API_KEY"]
    },
    "mistral": {
      "env": ["MISTRAL_API_KEY"]
    },
    "openrouter": {
      "env": ["OPENROUTER_API_KEY"]
    },
    "anthropic": {
      "env": ["ANTHROPIC_API_KEY"]
    }
  }
}
```

커넥터의 표시 이름과 Provider가 기대하는 환경 변수 이름이 다를 수 있습니다. 실행 전에 해당 커넥터의 실제 환경 변수 매핑을 확인하세요.

## Custom Provider 설정

나머지 커넥터는 이름만으로 API 프로토콜이나 Base URL을 안전하게 추정할 수 없습니다. 해당 커넥터가 OpenAI Chat Completions 호환 API를 제공한다는 것을 확인한 뒤 다음 형태로 추가합니다.

```jsonc
{
  "provider": {
    "my-manus-connector": {
      "npm": "@ai-sdk/openai-compatible",
      "env": ["MY_MANUS_CONNECTOR_API_KEY"],
      "models": {
        "model-id": {
          "name": "Model name",
          "limit": { "context": 128000, "output": 8192 }
        }
      },
      "options": {
        "baseURL": "https://provider.example.com/v1"
      }
    }
  }
}
```

반드시 확인해야 하는 항목은 다음과 같습니다.

- Base URL과 `/models`, `/chat/completions` 경로
- OpenAI Chat Completions인지, Responses인지, Anthropic Messages인지
- 모델 ID와 context/output 제한
- API 키 환경 변수 이름
- rate limit, 데이터 보존 정책, 비용

엔드포인트를 모르는 상태에서 커넥터 이름만 보고 URL을 추측해 연결하면 잘못된 서비스로 요청하거나 키가 소모될 수 있습니다.

## 안전한 연결 원칙

- API 키와 bearer token은 GitHub 커밋, README, `kilo.json`, 프론트엔드 코드에 넣지 않습니다.
- `.env.example`에는 실제 값 대신 변수 이름만 기록합니다.
- 운영 키는 CI secret 또는 배포 플랫폼의 encrypted environment variable로 등록합니다.
- Provider별 연결 테스트는 `/models` 조회와 짧은 비밀정보 없는 테스트 프롬프트로 분리합니다.
- 사용하지 않는 커넥터는 Manus에서 `disabled`로 유지합니다.
