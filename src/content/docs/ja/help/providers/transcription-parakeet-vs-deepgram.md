---
title: 文字起こしプロバイダーの選択
description: ExtraBrain のローカル Parakeet と Deepgram の転写を、プライバシー、セットアップ時間、API の主要な要件、およびデータ フローによって比較します。
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain は、ローカルの NVIDIA Parakeet または Deepgram を使用してライブ音声をテキストに変換します。

![オンボーディング中に選択されたローカル文字起こし](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 簡単な比較

| オプション | 最適な用途 | データフロー | 設定 |
| --- | --- | --- | --- |
| ローカル Parakeet | ほとんどのユーザー、プライバシーに配慮したセッション、最速のセットアップ | 文字起こしは Mac で実行されます | API キーがありません |
| Deepgram | すでにマネージドクラウド文字起こしに依存しているユーザー | 音声は Deepgram に送信されます | Deepgram API キーが必要です |

## ローカル Parakeet

最も単純なセットアップが必要で、Mac で文字起こしを行う場合は、ローカル Parakeet を選択します。ローカル モデル ストレージが必要で、モデルの実行中にローカル CPU が使用されます。

## Deepgram

クラウド文字起こしがワークフローに適合している場合、または組織がすでに Deepgram を使用している場合は、Deepgram を選択してください。 Deepgram には有効な API キーが必要です。

![オンボーディング中のDeepgramキーフィールド](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

検証が成功すると、ExtraBrain は Deepgram が選択された状態でオンボーディングを続行できます。

![オンボーディング中のDeepgram検証成功](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## プライバシーに関する注意事項

ローカル Parakeet は転写をローカルに保ちます。 Deepgram は、文字起こしのために音声を Deepgram に送信します。 AI 分析は別の選択であり、トランスクリプト テキストまたはスクリーンショットから派生したコンテキストを、選択した LLM プロバイダーに送信する場合があります。

## 関連している

- [ExtraBrain オーディオ設定を構成する](/ja/help/settings/audio-settings/)
- [トランスクリプトとフィラーワードをクリーンアップ](/ja/help/settings/transcript-cleanup-filler-words/)
- [音声トリガーフレーズを使用する](/ja/help/settings/voice-trigger/)
- [ExtraBrain によるデータの処理方法](/ja/help/privacy-security/how-extrabrain-handles-data/)

## 文字起こしの質問

### どの文字起こしプロバイダーがプライバシーに最適ですか?

オーディオを Mac に残す必要がある場合は、ローカル Parakeet が最適なデフォルトです。 Deepgram API キーは必要ありません。

### Deepgram をいつ選択すればよいですか?

クラウド文字起こしがセッションに適合する場合、組織がすでに Deepgram を使用している場合、またはマネージド文字起こしを希望し、音声が Deepgram に送信されることを受け入れる場合は、Deepgram を選択します。
