---
title: ExtraBrain オーディオ設定を構成する
description: ExtraBrain で、文字起こしプロバイダー、Deepgram API キー、マイク デバイス、文字起こしクリーンアップ、音声トリガー、およびシステム オーディオ許可を設定します。
sidebar:
  label: オーディオ設定
  order: 5
lastUpdated: 2026-04-30
---

**[設定] -> [オーディオ]** を使用して、文字起こし動作とマイク入力を選択します。

![文字起こしプロバイダーとマイク コントロールを使用した ExtraBrain オーディオ設定](/assets/screenshots/help/dark/settings-audio.png)

## オーディオコントロール

| コントロール | 何が変わるのか |
| --- | --- |
| Speech-to-Text プロバイダー | ローカル Parakeet または Deepgram クラウド転写。 |
| Deepgram API キー | Deepgram が選択されている場合にのみ必須です。 |
| 音源 | 優先マイク入力。 |
| ボイストリガー | アクティブなセッション中に分析を開始するための音声フレーズ制御。 |
| トランスクリプトのクリーンアップ | トランスクリプトカードと分析の前にフィラーワードを削除します。 |
| システムオーディオの許可 | 必要に応じて app/system オーディオをキャプチャするための macOS 権限フロー。 |

## 注意事項

- オーディオ デバイスの変更は新しいセッションに適用されます。
- ローカル Parakeet は転写をローカルに保ちます。
- Deepgram は、文字起こしのために音声を Deepgram に送信します。
- ExtraBrain は、録音を行う前に macOS マイクとシステム オーディオのアクセス許可を必要とする場合があります。

## 関連している

- [Parakeet または Deepgram 転写を選択してください](/ja/help/providers/transcription-parakeet-vs-deepgram/)
- [macOS 権限を付与](/ja/help/getting-started/macos-permissions/)
- [トランスクリプトとフィラーワードをクリーンアップ](/ja/help/settings/transcript-cleanup-filler-words/)
- [音声トリガーフレーズを使用する](/ja/help/settings/voice-trigger/)

## よくある質問

### ExtraBrain がデバイスが見つからなかったと言うのはなぜですか?

macOS がマイクの許可をまだ付与していないか、選択された入力が使用できない可能性があります。許可を与え、マイクを再接続して、新しいセッションを開始します。

### 文字起こしプロバイダーを切り替えると、現在のセッションに影響しますか?

プロバイダーとデバイスの変更は、セッションの開始前に適用すると最も安全です。オーディオに大きな変更があった後、録音を停止し、新しいセッションを開始します。

