---
title: 전사 제공업체를 선택하세요
description: 개인 정보 보호, 설정 시간, API 주요 요구 사항 및 데이터 흐름을 기준으로 ExtraBrain의 로컬 Parakeet 및 Deepgram 전사를 비교합니다.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain은 로컬 NVIDIA Parakeet 또는 Deepgram를 사용하여 실시간 음성을 텍스트로 변환합니다.

![온보딩 중에 선택된 로컬 전사](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 빠른 비교

| 옵션 | 최고의 대상 | 데이터 흐름 | 설정 |
| --- | --- | --- | --- |
| 지역 Parakeet | 대부분의 사용자, 개인 정보 보호에 민감한 세션, 가장 빠른 설정 | Mac에서 전사가 실행됩니다. | API 키 없음 |
| Deepgram | 이미 관리형 클라우드 전사를 사용하고 있는 사용자 | 오디오가 Deepgram로 전송됩니다. | Deepgram API 키 필요 |

## 지역 Parakeet

가장 간단한 설정을 원하고 Mac에서 전사가 이루어지도록 하려면 로컬 Parakeet을 선택하십시오. 로컬 모델 저장소가 필요하며 모델이 실행되는 동안 로컬 CPU를 사용합니다.

## Deepgram

클라우드 전사가 워크플로에 적합하거나 조직에서 이미 Deepgram을 사용하는 경우 Deepgram을 선택하세요. Deepgram에는 유효한 API 키가 필요합니다.

![온보딩 중 Deepgram 키 필드](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

검증이 성공하면 ExtraBrain은(는) Deepgram을 선택한 상태로 온보딩을 계속할 수 있습니다.

![Deepgram 온보딩 중 검증 성공](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## 개인정보 보호정책

로컬 Parakeet는 전사를 로컬로 유지합니다. Deepgram은 텍스트 변환을 위해 오디오를 Deepgram로 보냅니다. AI 분석은 별도의 선택이며 귀하가 선택한 LLM 제공자에게 기록 텍스트 또는 스크린샷에서 파생된 컨텍스트를 보낼 수 있습니다.

## 관련된

- [ExtraBrain 오디오 설정 구성](/ko/help/settings/audio-settings/)
- [스크립트 및 필러 단어 정리](/ko/help/settings/transcript-cleanup-filler-words/)
- [음성 트리거 문구 사용](/ko/help/settings/voice-trigger/)
- [ExtraBrain이 데이터를 처리하는 방법](/ko/help/privacy-security/how-extrabrain-handles-data/)

## 전사 질문

### 개인정보 보호에 가장 적합한 전사 제공업체는 어디인가요?

로컬 Parakeet은 오디오가 Mac에 유지되어야 할 때 가장 좋은 기본값입니다. Deepgram API 키가 필요하지 않습니다.

### 언제 Deepgram을 선택해야 합니까?

클라우드 전사가 세션에 적합하거나, 조직에서 이미 Deepgram을 사용하고 있거나, 관리형 전사를 선호하고 오디오가 Deepgram로 전송되는 것을 수락하는 경우 Deepgram을 선택합니다.
