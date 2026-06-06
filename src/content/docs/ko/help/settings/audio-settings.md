---
title: ExtraBrain 오디오 설정 구성
description: ExtraBrain에서 전사 공급자, Deepgram API 키, 마이크 장치, 전사 정리 정리, 음성 트리거 및 시스템 오디오 권한을 설정합니다.
sidebar:
  label: 오디오 설정
  order: 5
lastUpdated: 2026-04-30
---

**설정 -> 오디오**를 사용하여 전사 동작 및 마이크 입력을 선택하세요.

![텍스트 변환 제공자와 마이크 컨트롤을 사용한 ExtraBrain 오디오 설정](/assets/screenshots/help/dark/settings-audio.png)

## 오디오 컨트롤

| 제어 | 무엇이 바뀌는가 |
| --- | --- |
| 음성-텍스트 제공업체 | 로컬 Parakeet 또는 Deepgram 클라우드 전사. |
| Deepgram API 키 | Deepgram을 선택한 경우에만 필요합니다. |
| 오디오 소스 | 선호하는 마이크 입력. |
| 음성 트리거 | 활성 세션 중 분석 시작을 위한 음성 문구 제어. |
| 성적표 정리 | 성적표 카드 및 분석 전에 필러 단어 제거. |
| 시스템 오디오 권한 | 필요한 경우 앱/system 오디오를 캡처하기 위한 macOS 권한 흐름. |

## 메모

- 오디오 장치 변경 사항은 새 세션에 적용됩니다.
- 로컬 Parakeet은 전사를 로컬로 유지합니다.
- Deepgram은 텍스트 변환을 위해 오디오를 Deepgram로 보냅니다.
- 녹음이 작동하려면 ExtraBrain에 macOS 마이크 및 시스템 오디오 권한이 필요할 수 있습니다.

## 관련된

- [Parakeet 또는 Deepgram 전사 선택](/ko/help/providers/transcription-parakeet-vs-deepgram/)
- [macOS 권한 부여](/ko/help/getting-started/macos-permissions/)
- [스크립트 및 필러 단어 정리](/ko/help/settings/transcript-cleanup-filler-words/)
- [음성 트리거 문구 사용](/ko/help/settings/voice-trigger/)

## 일반적인 질문

### ExtraBrain에서 장치를 찾을 수 없다고 말하는 이유는 무엇입니까?

macOS이(가) 아직 마이크 권한을 부여하지 않았거나 선택한 입력을 사용하지 못할 수 있습니다. 권한을 부여하고 마이크를 다시 연결한 다음 새 세션을 시작하세요.

### 전사 제공자를 전환하면 현재 세션에 영향을 미치나요?

공급자 및 장치 변경 사항은 세션이 시작되기 전에 적용되는 것이 가장 안전합니다. 주요 오디오 변경 후 녹음을 중지하고 새 세션을 시작합니다.

