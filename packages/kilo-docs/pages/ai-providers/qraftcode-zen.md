---
title: "QraftCode Zen Gateway"
description: "Connect Kilo Code to an OpenAI-compatible QraftCode Zen Gateway."
sidebar_label: QraftCode Zen
---

# QraftCode Zen Gateway

QraftCode Zen은 OpenAI Chat Completions 형식을 사용하는 게이트웨이입니다. Kilo Code의 Custom Provider 기능을 사용하면 Kilo의 Chat, CLI, JetBrains 환경에서 같은 Gateway와 모델 카탈로그를 공유할 수 있습니다.

{% callout type="warning" %}
QraftCode Gateway를 인터넷에 공개할 때는 반드시 인증, 요청 제한, 사용량 로깅을 함께 구성하세요. API 키를 브라우저나 저장소에 직접 넣지 말고 서버 환경 변수 또는 Kilo의 로컬 비밀 저장소에서만 관리하세요.
{% /callout %}

## 연결 정보

| 항목 | 값 |
|---|---|
| Provider API | OpenAI Compatible |
| Base URL | `https://qraftcode.vercel.app/api/v1` |
| Models endpoint | `GET /models` |
| Chat endpoint | `POST /chat/completions` |
| Model ID | `provider:model-id` 또는 Gateway가 반환하는 모델 ID |

## VS Code에서 연결하기

1. Kilo Code의 **Settings → Providers**를 엽니다.
2. **Custom provider**를 선택합니다.
3. 다음 값을 입력합니다.

- **Provider ID**: `qraftcode-zen`
- **Display name**: `QraftCode Zen`
- **Provider API**: `OpenAI Compatible`
- **Base URL**: `https://qraftcode.vercel.app/api/v1`
- **API key**: Gateway에 인증을 추가했다면 해당 키를 입력합니다. 인증이 없는 개발용 Gateway라면 비워 둡니다.

4. **Fetch models**를 눌러 모델 목록을 불러옵니다.
5. 사용할 모델을 선택하고 저장합니다.

Gateway의 모델 목록이 자동으로 표시되지 않으면 모델 ID를 수동으로 추가할 수 있습니다. 모델 목록은 다음 명령으로도 확인할 수 있습니다.

```bash
curl https://qraftcode.vercel.app/api/v1/models
```

## CLI 설정

`~/.config/kilo/kilo.json` 또는 프로젝트의 `kilo.json`에 Provider를 추가합니다.

```jsonc
{
  "provider": {
    "qraftcode-zen": {
      "npm": "@ai-sdk/openai-compatible",
      "models": {
        "openrouter:google/gemini-omni-1.2-flash": {
          "name": "Gemini Omni · QraftCode Zen",
          "limit": {
            "context": 128000,
            "output": 8192
          }
        }
      },
      "options": {
        "baseURL": "https://qraftcode.vercel.app/api/v1",
        "apiKey": "none"
      }
    }
  },
  "model": "qraftcode-zen/openrouter:google/gemini-omni-1.2-flash"
}
```

인증을 활성화한 Gateway라면 `apiKey`에 실제 키를 넣는 대신 Kilo가 지원하는 환경 변수 방식을 사용하세요.

```jsonc
{
  "provider": {
    "qraftcode-zen": {
      "env": ["QRAFTCODE_ZEN_API_KEY"],
      "options": {
        "baseURL": "https://qraftcode.vercel.app/api/v1"
      }
    }
  }
}
```

## 모델 선택 전략

QraftCode Zen은 Provider prefix를 사용해 특정 백엔드로 요청을 보낼 수 있습니다.

```text
openrouter:<model-id>
groq:<model-id>
mistral:<model-id>
upstage:<model-id>
anthropic:<model-id>
```

모델을 바꾸기 전에 `GET /api/v1/models`에서 현재 사용 가능한 모델 ID를 확인하세요. Provider별 모델 가용성, 가격, rate limit은 변경될 수 있습니다.

## 연결 확인

```bash
curl -fsS https://qraftcode.vercel.app/api/health
curl -fsS https://qraftcode.vercel.app/api/v1/providers
curl -fsS https://qraftcode.vercel.app/api/v1/models | head
```

정상 연결이면 Health 응답에 `status: "ok"`가 표시되고, Provider 응답에 연결된 Provider가 나타납니다.

## 문제 해결

- **모델 목록이 비어 있음**: Base URL이 `/api/v1`로 끝나는지 확인하고 `GET /models`를 직접 호출합니다.
- **Model not found**: `provider:model-id`의 Provider prefix와 모델 ID를 최신 `/models` 응답과 비교합니다.
- **401 또는 403**: Gateway 인증 키와 Kilo의 로컬 설정을 확인합니다.
- **429**: Gateway 또는 upstream Provider의 요청 제한일 수 있으므로 retry 정책과 사용량을 확인합니다.
- **응답이 스트리밍되지 않음**: Gateway가 `text/event-stream` 형식의 OpenAI 호환 스트림을 반환하는지 확인합니다.
