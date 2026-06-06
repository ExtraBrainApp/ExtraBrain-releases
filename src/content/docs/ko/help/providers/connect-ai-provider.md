---
title: AI 공급자 연결
description: ExtraBrain에서 OpenAI, Anthropic, Claude 구독, Codex 구독 또는 사용자 지정 OpenAI-compatible 엔드포인트를 설정합니다.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain은 실시간 분석을 위해 선택한 AI 제공자를 사용합니다. 프롬프트, 스크립트 컨텍스트, 스크린샷 파생 컨텍스트가 전송될 수 있는 공급자 설정을 제어합니다.

![ExtraBrain 온보딩의 AI 제공업체 선택자](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## 공공 공급자 모드

- OpenAI API 키.
- Anthropic API 키.
- Codex API 키 없이 ChatGPT Plus 또는 Pro을 직접 사용하여 구독합니다.
- Claude API 키 없이 Claude Pro 또는 Max를 직접 사용하여 구독합니다.
- 기본 URL, API 키 및 모델 이름이 있는 사용자 정의 OpenAI-compatible 엔드포인트.

## 설정 체크리스트

1. 온보딩을 열거나 **설정 -> LLM 제공자**를 엽니다.
2. 공급자 제품군을 선택합니다.
3. API 키 또는 구독 모드를 선택하세요.
4. 필요한 경우 자격 증명을 입력합니다.
5. 연결을 확인하거나 다시 확인하세요.
6. 간단한 테스트 분석을 실행합니다.

![LLM 제공업체 설정 탭](/assets/screenshots/help/dark/settings-llm-providers.png)

## 데이터 흐름

클라우드 제공업체에 분석을 위해 ExtraBrain을(를) 요청하면 관련 메시지, 스크립트 컨텍스트, 스크린샷에서 파생된 컨텍스트, 사용자 정의 질문이 해당 제공업체에 전송될 수 있습니다. 공급자 청구, 보존, 할당량 및 계정 제어는 귀하가 선택한 공급자에 의해 관리됩니다.

## 관련된

- [OpenAI 또는 Codex 구독 연결](/ko/help/providers/openai-codex-setup/)
- [Anthropic 또는 Claude 구독 연결](/ko/help/providers/anthropic-claude-setup/)
- [맞춤 OpenAI-compatible 엔드포인트 사용](/ko/help/providers/custom-openai-compatible-endpoint/)
- [ExtraBrain 가격 책정 및 제공업체 비용 분리 검토](/ko/pricing/)

## AI 제공자 질문

### 어떤 AI 제공업체를 먼저 선택해야 합니까?

이미 신뢰하고 실제 세션 전에 검증할 수 있는 제공업체를 선택하세요. 대부분의 사용자에게 이는 기존 OpenAI, Anthropic, Claude 또는 Codex 계정으로 시작하는 것을 의미합니다.

### 둘 이상의 공급자 경로를 준비할 수 있나요?

예. 할당량, 네트워크 액세스 또는 계정 상태가 변경될 수 있는 인터뷰나 회의 전에 백업 공급자 경로를 유지하는 것이 유용합니다.
