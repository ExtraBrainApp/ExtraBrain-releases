---
title: Anthropic 또는 Claude 구독 연결
description: ExtraBrain에서 Anthropic API 키 모드 또는 Claude 구독 모드를 설정하고, 액세스 권한을 확인하고, 모델을 선택하고, 로그인 문제를 해결하세요.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain은 Anthropic API 키 모드 및 Claude 구독 모드를 지원합니다.

## Anthropic API 키 모드

ExtraBrain이 관리하는 API 키를 통해 Anthropic을 호출하도록 하려는 경우 이 모드를 사용하십시오.

1. **설정 -> LLM 제공자**를 엽니다.
2. **Anthropic**를 선택하세요.
3. Anthropic API 키를 붙여넣으세요.
4. 모델을 선택하세요.
5. 키의 유효성을 검사합니다.
6. 간단한 테스트 분석을 실행합니다.

![LLM Anthropic이 선택된 공급자 설정 탭](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude 구독 모드

ExtraBrain에서 Claude Pro 또는 Max 구독을 직접 사용하려면 Claude 구독을 사용하세요. 이 모드에서는 ExtraBrain에 API 키가 필요하지 않습니다.

1. **설정 -> LLM 제공자**를 엽니다.
2. **Claude 구독**을 선택하세요.
3. 로그인 상태를 다시 확인하세요.
4. 사용 가능한 모델을 선택하세요.
5. 테스트 분석을 실행합니다.

## 문제 해결

유효성 검사에 실패하면 API 키가 올바른 Anthropic 계정에 속하고 모델 액세스 권한이 있으며 추가 공백 없이 붙여넣어졌는지 확인하세요. 구독 모드의 경우 Claude 구독이 활성화되어 있고 ExtraBrain이 예상하는 곳에 로그인되어 있는지 확인하세요.

## Anthropic 및 Claude 질문

### Claude 구독 모드에 Anthropic API 키가 필요합니까?

아니요. Claude 구독 모드는 Claude Pro 또는 Max 구독 액세스를 위한 것이며 ExtraBrain 내에 Anthropic API 키가 필요하지 않습니다.

### Anthropic 또는 Claude로 어떤 데이터를 보낼 수 있나요?

분석을 위해 선택되면 관련 프롬프트, 스크립트 컨텍스트, 스크린샷에서 파생된 컨텍스트 및 사용자 정의 질문이 해당 공급자 모드에 따라 Anthropic 또는 Claude로 전송될 수 있습니다.
