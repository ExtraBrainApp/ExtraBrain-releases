---
title: 처음으로 ExtraBrain 설정
description: 권한을 부여하고, 텍스트 변환을 선택하고, AI 공급자를 연결하여 macOS에서 ExtraBrain 온보딩을 완료하세요.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

첫 실행 설정은 시작부터 사용 가능한 라이브 세션까지 ExtraBrain을 가져옵니다. 온보딩 흐름에는 환영, macOS 권한, 전사 제공자, AI 제공자 및 완료가 포함됩니다.

![ExtraBrain 온보딩 시작 화면](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. 온보딩 시작

ExtraBrain을 열고 시작 화면에서 계속하세요. 권한 및 공급자 설정을 완료하는 동안 앱을 열어두세요.

## 2. macOS 권한 부여

ExtraBrain에 사용하기로 선택한 컨텍스트를 듣고 보려면 권한이 필요합니다.

- 음성 오디오용 마이크입니다.
- 스크린샷 및 화면 컨텍스트를 위한 화면 녹화.
- 지원되는 경우 통화, 회의, 비디오 또는 공유 오디오 녹음을 위한 시스템 오디오.

macOS가 권한을 보류 또는 거부 상태로 유지하는 경우 복구 단계는 [macOS 권한 부여](/ko/help/getting-started/macos-permissions/)를 참조하세요.

## 3. 전사를 선택하세요

하나의 전사 모드를 선택하세요:

- 로컬 Parakeet은 Mac에서 실행되며 API 키가 필요하지 않습니다.
- Deepgram은 클라우드 전사를 사용하며 Deepgram API 키가 필요합니다.

![온보딩에서 전사 제공자 선택](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. AI 연결

ExtraBrain이 실시간 분석에 사용해야 하는 AI 공급자 제품군과 연결 방법을 선택하세요. 공용 공급자 모드에는 OpenAI, Anthropic, Claude 구독, Codex 구독 및 사용자 지정 OpenAI-compatible 엔드포인트가 포함됩니다.

![온보딩 시 AI 제공업체 선택자](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

온보딩에 표시된 로컬 모델 옵션은 비활성화되어 있으며 사용 가능한 공개 설정으로 처리되어서는 안 됩니다.

## 5. 간단한 테스트 실행

실제 인터뷰나 회의 전:

- 녹음 시작
- 성적표 항목이 나타나는지 확인
- 화면 상황이 중요한 경우 하나의 스크린샷을 캡처하세요.
- 하나의 분석 실행
- 예상한 제공자로부터 답변이 오는지 확인하세요.

## 관련된

- [Parakeet 또는 Deepgram 전사 선택](/ko/help/providers/transcription-parakeet-vs-deepgram/)
- [AI 제공업체 연결](/ko/help/providers/connect-ai-provider/)
- [키보드 단축키](/ko/help/settings/keyboard-shortcuts/)

## 설정 질문

### 처음 실행한 후 공급자를 변경할 수 있나요?

예. **설정 -> 오디오**에서 전사를 변경하고 **설정 -> LLM 제공자**에서 AI 제공자를 변경할 수 있습니다. 설정을 변경한 후 간단한 테스트를 실행하십시오.

### 온보딩을 계속할 수 없으면 어떻게 해야 합니까?

macOS 권한, 공급자 유효성 검사 및 필수 필드를 확인하세요. Deepgram에는 유효한 키가 필요하지만 로컬 Parakeet은 API 키 없이 계속할 수 있습니다.
