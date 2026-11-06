---
title: "Manus API Connectors"
description: "Map enabled Manus API connectors to Kilo Code providers without committing secrets."
sidebar_label: Manus Connectors
---

# Manus API Connectors

이 페이지는 Manus 세션에서 활성화된 API 커넥터를 Kilo Code Provider로 연결할 때 사용하는 이름과 설정 경계를 정리합니다. **API 키 값은 저장소에 넣지 않습니다.** 키는 로컬 비밀 저장소, CI secret, 또는 실행 환경의 환경 변수로만 주입하세요.

## 현재 활성 커넥터

현재 Manus에서 `enabled`로 확인된 API 커넥터는 **14개**입니다. 아래 Base URL은 각 서비스의 공식 문서에서 확인한 값입니다.

| 커넥터 이름 | API 프로토콜 | Base URL | 모델 목록 |
|---|---|---|---|
| `Anthropic` | Anthropic Messages | Native Provider | Native Provider |
| `Groq` | OpenAI Compatible | Native Provider | Native Provider |
| `미스트랄` | OpenAI Compatible | Native Provider | Native Provider |
| `오픈라우터` | OpenAI Compatible | Native Provider | Native Provider |
| `업스테이지` | OpenAI Compatible | `https://api.upstage.ai/v1` | `/models` 확인 필요 |
| `Ai1api` | OpenAI Chat Completions | `https://ai1api.com/v1` | 미문서화 |
| `Api.airforce` | OpenAI Chat Completions | `https://api.airforce/v1` | `/v1/models` |
| `Ashna` | OpenAI Chat Completions / Responses / Anthropic | `https://api.ashna.ai/v1/api` | `/v1/api/models` |
| `CHUIZI_API_KEY` | OpenAI Chat Completions | `https://api.chuizi.ai/v1` | `/models` |
| `Freemodel.dev` | OpenAI Chat Completions / Responses / Anthropic | `https://api.freemodel.dev/v1` | 미문서화 |
| `LLMsRelay` | OpenAI Chat Completions | `https://api.llmsrelay.com/v1` | `/v1/models` |
| `OPPER_API_KEY` | OpenAI Chat Completions | `https://api.opper.ai/v3/compat` | `/v3/compat/models` |
| `routerlab` | OpenAI Chat Completions | `https://api.routerlab.ch/v1` | `/v1/models` |
| `POLLINATIONS_API_KEY` | 프로토콜 확인 필요 | 공식 문서 확인 필요 | 공식 문서 확인 필요 |

`GitHub`는 활성화된 Manus 내장 커넥터이지만 모델 Provider가 아닙니다. 저장소·브랜치·커밋 관리에 사용합니다.

## Native Provider 설정

Kilo의 native Provider를 사용할 때는 API 키를 `kilo.json`에 직접 넣지 말고 환경 변수로 지정합니다.

```jsonc
{
  "provider": {
    "groq": {
      "env": ["groq_api_key"]
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

공식 문서에서 확인된 커스텀 Provider는 아래처럼 바로 추가할 수 있습니다. `models` 안의 실제 모델 ID는 각 Provider의 모델 목록 또는 계정 화면에서 확인한 값을 사용하세요.

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
        "baseURL": "https://api.airforce/v1"
      }
    }
  }
}
```

Provider별로 사용할 수 있는 Base URL 예시는 다음과 같습니다.

```jsonc
{
  "provider": {
    "ai1api": {
      "env": ["OPEN_API_KEY"],
      "options": { "baseURL": "https://ai1api.com/v1" }
    },
    "upstage": {
      "env": ["UPSTAGE_API_KEY"],
      "options": { "baseURL": "https://api.upstage.ai/v1" }
    },
    "ashna": {
      "env": ["ASHNA_API_KEY"],
      "options": { "baseURL": "https://api.ashna.ai/v1/api" }
    },
    "chuizi": {
      "env": ["CHUIZI_API_KEY"],
      "options": { "baseURL": "https://api.chuizi.ai/v1" }
    },
    "freemodel": {
      "env": ["FREEMODEL_API_KEY"],
      "options": { "baseURL": "https://api.freemodel.dev/v1" }
    },
    "llmsrelay": {
      "env": ["LLMSRELAY_API_KEY"],
      "options": { "baseURL": "https://api.llmsrelay.com/v1" }
    },
    "opper": {
      "env": ["OPPER_API_KEY"],
      "options": { "baseURL": "https://api.opper.ai/v3/compat" }
    },
    "routerlab": {
      "env": ["ROUTERLAB_API_KEY"],
      "options": { "baseURL": "https://api.routerlab.ch/v1" }
    }
  }
}
```

Ai1api, Freemodel.dev는 공식 문서에서 모델 목록 경로가 확인되지 않았으므로 모델을 수동으로 등록해야 합니다. Api.airforce, Ashna, Chuizi AI, LLMsRelay, Opper AI, RouterLab은 공식 모델 목록 경로를 사용할 수 있습니다. 업스테이지는 `https://api.upstage.ai/v1`을 Base URL로 사용하고, 연결 후 `/models` 응답을 확인하세요. `POLLINATIONS_API_KEY`는 활성 커넥터로 확인했지만 아직 Base URL과 프로토콜을 확인하지 않았습니다.

모든 Provider에서 최종적으로 확인해야 하는 항목은 모델 ID, context/output 제한, rate limit, 데이터 보존 정책, 비용입니다.

공식 문서 링크: [AI1API](https://ai1api.com/docs/api), [Api.Airforce](https://api.airforce/docs/quickstart/), [AshnaAI](https://www.ashna.ai/api-docs), [Chuizi AI](https://chuizi.ai/docs/api/chat-completions), [FreeModel](https://freemodel.dev/), [LLMsRelay](https://llmsrelay.com/docs/api-reference/openai/), [Opper AI](https://docs.opper.ai/build/gateway/drop-in-sdks), [RouterLab](https://routerlab.ch/en/docs/openai-compatible).

## 안전한 연결 원칙

- API 키와 bearer token은 GitHub 커밋, README, `kilo.json`, 프론트엔드 코드에 넣지 않습니다.
- `.env.example`에는 실제 값 대신 변수 이름만 기록합니다.
- 운영 키는 CI secret 또는 배포 플랫폼의 encrypted environment variable로 등록합니다.
- Provider별 연결 테스트는 `/models` 조회와 짧은 비밀정보 없는 테스트 프롬프트로 분리합니다.
- 사용하지 않는 커넥터는 Manus에서 `disabled`로 유지합니다.
