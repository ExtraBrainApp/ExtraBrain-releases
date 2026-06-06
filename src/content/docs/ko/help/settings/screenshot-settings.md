---
title: ExtraBrain에서 스크린샷 설정 구성
description: 활성 창 또는 전체 화면 스크린샷 캡처를 선택하고, 분석 전 캡처 동작을 구성하고, ExtraBrain의 화면 컨텍스트 데이터 흐름을 이해하세요.
sidebar:
  label: 스크린샷 설정
  order: 8
lastUpdated: 2026-04-30
---

**설정 -> 스크린샷**을 사용하여 ExtraBrain이 화면 컨텍스트를 캡처하는 방법을 제어합니다.

![ExtraBrain 캡처 모드 컨트롤을 사용한 스크린샷 설정](/assets/screenshots/help/dark/settings-screenshot.png)

## 스크린샷 컨트롤

| 환경 | 행동 |
| --- | --- |
| 활성 창 | 가능한 경우 현재 활성 창을 캡처합니다. |
| 전체 화면 | 더 넓은 화면 컨텍스트를 캡처합니다. |
| 분석 전 캡처 | 분석이 시작되기 전에 자동으로 스크린샷을 찍습니다. |

## 모드 선택

논의 중인 앱이나 브라우저 창에 ExtraBrain이 집중되도록 하려면 활성 창 캡처를 사용하세요. 관련 컨텍스트가 여러 표시 영역에 걸쳐 있는 경우 전체 화면 캡처를 사용하십시오. 일반적으로 화면 컨텍스트가 질문의 일부이고 수동으로 캡처를 누르고 싶지 않은 경우 분석 전 캡처를 사용하십시오.

스크린샷과 스크린샷에서 파생된 컨텍스트는 귀하가 분석을 요청할 때 선택한 AI 공급자에게 전송되는 프롬프트에 사용될 수 있습니다.

## 관련된

- [스크린샷 및 화면 컨텍스트 사용](/ko/help/using-extrabrain/screenshots-screen-context/)
- [macOS 권한 부여](/ko/help/getting-started/macos-permissions/)
- [개인정보 보호 제어](/ko/help/privacy-security/privacy-controls/)
- [ExtraBrain이 데이터를 처리하는 방법](/ko/help/privacy-security/how-extrabrain-handles-data/)

## 일반적인 질문

### 스크린샷이 표시되지 않는 이유는 무엇입니까?

macOS 화면 녹화 권한을 확인하고, 세션이 활성 상태인지 확인하고, 선택한 캡처 모드가 캡처하려는 앱에 적합한지 확인하세요.

### 분석 전 캡처를 활성화해야 합니까?

화면 컨텍스트가 거의 항상 관련성이 있을 때 활성화하세요. 일반적으로 성적표만 분석하려는 경우에는 이 옵션을 해제해 두세요.
