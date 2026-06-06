---
title: AI 공급자 설정
description: 실시간 분석을 위해 ExtraBrain 공급자, API 키, 구독, 사용자 지정 엔드포인트 및 텍스트 변환 선택을 설정하세요.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

귀하의 설정과 일치하는 공급자 가이드를 선택해야 할 때 이 개요를 사용하십시오. ExtraBrain은 API 키 공급자, 구독 공급자 모드 및 사용자 지정 OpenAI-compatible 엔드포인트를 지원합니다.

![ExtraBrain AI 제공업체 선택기](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## 주요 시사점

ExtraBrain AI 공급자는 앱이 기록, 프롬프트, 스크린샷 또는 세션 컨텍스트를 실시간 분석으로 전환할 때 사용하는 모델 경로입니다.

- ExtraBrain은 Google Gemma 4 로컬 AI, OpenAI, Anthropic, Claude 구독, Codex 구독 및 사용자 지정 OpenAI-compatible 엔드포인트를 지원합니다.
- API 키 모드에는 현재 공급자 자격 증명이 필요합니다. 구독 모드는 앱에서 지원하는 로그인된 구독 경로를 사용합니다.
- 제공자 검증은 실시간 인터뷰, 회의, 강의 또는 연구 통화 전에 한 번 테스트되어야 합니다.
- 공급자 청구, 보존, 모델 액세스 및 할당량은 귀하가 선택한 공급자 계정에 의해 제어됩니다.

- [AI 제공업체 연결](/ko/help/providers/connect-ai-provider/)
- [OpenAI 또는 Codex 구독 연결](/ko/help/providers/openai-codex-setup/)
- [Anthropic 또는 Claude 구독 연결](/ko/help/providers/anthropic-claude-setup/)
- [맞춤 OpenAI-compatible 엔드포인트 사용](/ko/help/providers/custom-openai-compatible-endpoint/)
- [Parakeet 또는 Deepgram 전사 선택](/ko/help/providers/transcription-parakeet-vs-deepgram/)
- [앱 가격 및 제공업체 비용 비교](/ko/pricing/)

## 공급자 설정 체크리스트

1. API 키 모드, 구독 모드 또는 사용자 지정 엔드포인트를 원하는지 결정하세요.
2. **설정 -> LLM 제공자**를 엽니다.
3. 필수 제공업체 세부정보를 입력하세요.
4. 공급자 연결을 확인하거나 다시 확인하세요.
5. 하나의 테스트 분석을 실행합니다.
6. 민감한 컨텍스트를 사용하기 전에 [ExtraBrain에서 데이터를 처리하는 방법](/ko/help/privacy-security/how-extrabrain-handles-data/)을 검토하세요.

## 제공자 질문

### 모든 공급자 모드에 API 키가 필요합니까?

아니요. OpenAI 및 Anthropic API 키 모드에는 키가 필요합니다. Claude 구독 및 Codex 구독 모드는 구독 액세스를 사용하며 ExtraBrain에 API 키가 필요하지 않습니다.

### 공급자 유효성 검사에 실패하면 무엇을 확인해야 합니까?

키, 모델 액세스, 기본 URL, 구독 상태, 네트워크 액세스를 확인하세요. 사용자 정의 엔드포인트에는 엔드포인트에서 예상하는 정확한 모델 이름도 필요합니다.
