---
title: ExtraBrain이 데이터를 처리하는 방법
description: ExtraBrain이 로컬에 저장하는 내용, 선택한 AI 제공자에게 전송될 수 있는 내용, Deepgram이 오디오를 수신하는 시기를 이해합니다.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain은 로컬 데스크톱 앱이지만 정확한 데이터 흐름은 선택한 공급자와 기능에 따라 다릅니다.

![ExtraBrain의 개인정보 보호 설정](/assets/screenshots/help/dark/settings-privacy.png)

## 정확한 개인 정보 보호 문구

ExtraBrain은 Mac에 설정, API 키, 로컬 세션 기록 및 로컬 Parakeet 기록 데이터를 저장합니다. 클라우드 LLM 공급자를 사용하면 관련 텍스트, 스크립트 컨텍스트, 스크린샷에서 파생된 컨텍스트 및 프롬프트가 선택한 공급자에게 전송될 수 있습니다. Deepgram을 선택하면 텍스트 변환을 위해 오디오가 Deepgram로 전송됩니다. 익명 사용 공유를 비활성화할 수 있습니다.

## 귀하의 Mac에 무엇이 남아 있습니까?

- 앱 설정
- 앱에 저장된 공급자 구성 및 API 키
- 로컬 세션 기록
- 로컬 세션 기록에 저장된 대화 내용 및 스크린샷
- 로컬 Parakeet 전사 데이터

## 귀하의 Mac에 무엇이 남을 수 있습니까?

| 선택 | 전송될 수 있는 내용 |
| --- | --- |
| OpenAI, Anthropic, Claude 구독, Codex 구독 또는 사용자 정의 LLM 공급자 | 프롬프트, 스크립트 컨텍스트, 스크린샷에서 파생된 컨텍스트, 사용자 정의 질문 및 기타 선택된 분석 컨텍스트입니다. |
| Deepgram 전사 | 텍스트 변환을 위해 오디오가 Deepgram로 전송되었습니다. |
| 익명 사용 공유 | 활성화된 경우 사용량 데이터입니다. |

## 공급자 제어

외부 공급자 보유, 청구, 할당량, 모델 액세스 및 계정 정책은 귀하가 선택한 공급자에 의해 제어됩니다. 민감한 인터뷰, 직장, 고객 또는 연구 자료를 처리하는 경우 해당 공급자 설정을 검토하십시오.

## 관련된

- [개인정보 보호 제어](/ko/help/privacy-security/privacy-controls/)
- [Parakeet 또는 Deepgram 전사 선택](/ko/help/providers/transcription-parakeet-vs-deepgram/)
- [AI 제공업체 연결](/ko/help/providers/connect-ai-provider/)

## 데이터 처리 질문

### 가장 개인적인 전사 설정은 무엇입니까?

오디오 전사가 Mac에 유지되어야 하는 경우 로컬 Parakeet을 사용합니다. 오디오를 클라우드 전사 제공자에게 전송하면 안 되는 세션에는 Deepgram을 사용하지 마세요.

### 클라우드 제공업체 유지를 누가 관리하나요?

귀하가 선택한 공급자는 보존, 청구, 할당량 및 계정 정책을 제어합니다. 중요한 컨텍스트를 보내기 전에 OpenAI, Anthropic, Claude, Codex, Deepgram 또는 사용자 정의 엔드포인트 설정을 검토하세요.
