---
title: OpenAI 또는 Codex 구독 연결
description: ExtraBrain에서 OpenAI API 키 모드 또는 Codex 구독 모드를 설정하고, 액세스 권한을 확인하고, 모델을 선택하고, 설정 문제를 해결합니다.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain은 OpenAI API 키 모드 및 Codex 구독 모드를 지원합니다.

## OpenAI API 키 모드

ExtraBrain이 관리하는 API 키를 통해 OpenAI을 호출하도록 하려는 경우 이 모드를 사용하십시오.

1. **설정 -> LLM 제공자**를 엽니다.
2. **OpenAI**를 선택하세요.
3. API 키를 붙여넣으세요.
4. 가능한 경우 모델과 추론 노력을 선택합니다.
5. 키의 유효성을 검사합니다.
6. 간단한 분석을 실행하여 OpenAI에서 응답이 오는지 확인하세요.

![OpenAI 온보딩의 제공업체 양식](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex 구독 모드

ExtraBrain에서 ChatGPT Plus 또는 Pro 구독을 직접 사용하려면 Codex 구독을 사용하세요. 이 모드에서는 ExtraBrain에 API 키가 필요하지 않습니다.

1. **설정 -> LLM 제공자**를 엽니다.
2. **Codex 구독**을 선택하세요.
3. 로그인 상태를 다시 확인하세요.
4. 사용 가능한 모델을 선택하세요.
5. 테스트 분석을 실행합니다.

## 문제 해결

유효성 검사가 실패하면 키가 최신인지, 선택한 모델에 대한 액세스 권한이 있는지, 프록시 또는 조직 정책에 의해 차단되지 않았는지 확인하세요. 구독 모드의 경우 데스크톱 환경에서 로그인한 공급자 도구에 액세스할 수 있는지 확인하세요.

## OpenAI 및 Codex 질문

### Codex 구독 모드에 OpenAI API 키가 필요합니까?

아니요. Codex 구독 모드는 ChatGPT Plus 또는 Pro 구독 액세스를 직접 사용하며 ExtraBrain에 OpenAI API 키가 필요하지 않습니다.

### ExtraBrain은(는) OpenAI 또는 Codex에 무엇을 보낼 수 있나요?

분석을 위해 선택되면 ExtraBrain은 프롬프트, 스크립트 컨텍스트, 스크린샷에서 파생된 컨텍스트 및 응답에 필요한 사용자 정의 질문을 보낼 수 있습니다.
