---
title: ExtraBrain を初めてセットアップする
description: 権限を付与し、文字起こしを選択し、AI プロバイダーに接続することで、macOS での ExtraBrain オンボーディングを完了します。
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

初回実行セットアップでは、起動から使用可能なライブ セッションまで ExtraBrain が取得されます。オンボーディング フローには、ようこそ、macOS 権限、文字起こしプロバイダー、AI プロバイダー、および終了が含まれます。

![ExtraBrain オンボーディングのようこそ画面](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. オンボーディングを開始する

ExtraBrain を開き、ようこそ画面から続行します。権限とプロバイダーの設定を完了する間、アプリを開いたままにしてください。

## 2. macOS 権限を付与します

ExtraBrain には、使用することを選択したコンテキストを聞いて表示する権限が必要です。

- 音声用のマイク。
- スクリーンショットと画面コンテキストの画面記録。
- サポートされている場合は、通話、会議、ビデオ、または共有音声の文字起こし用のシステム オーディオ。

macOS が権限を保留中または拒否された状態のままにする場合の回復手順については、[macOS 権限を付与する](/ja/help/getting-started/macos-permissions/) を参照してください。

## 3. 文字起こしを選択します

転写モードを 1 つ選択します。

- ローカル Parakeet は Mac 上で実行され、API キーは必要ありません。
- Deepgram はクラウド転写を使用し、Deepgram API キーを必要とします。

![オンボーディング時の文字起こしプロバイダーの選択](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4.AIを接続する

ExtraBrain がライブ分析に使用する AI プロバイダー ファミリと接続方法を選択します。パブリック プロバイダー モードには、OpenAI、Anthropic、Claude サブスクリプション、Codex サブスクリプション、およびカスタム OpenAI-compatible エンドポイントが含まれます。

![オンボーディングの AI プロバイダー選択](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

オンボーディングで表示されるローカル モデル オプションは無効になっているため、利用可能なパブリック セットアップとして扱うべきではありません。

## 5. 短いテストを実行する

実際の面接や会議の前に:

- 録音を開始する
- トランスクリプトエントリが表示されることを確認する
- 画面のコンテキストが重要な場合は、スクリーンショットを 1 枚キャプチャします。
- 1 つの分析を実行する
- 予想したプロバイダーからの応答であることを確認します

## 関連している

- [Parakeet または Deepgram 転写を選択してください](/ja/help/providers/transcription-parakeet-vs-deepgram/)
- [AI プロバイダーに接続する](/ja/help/providers/connect-ai-provider/)
- [キーボード ショートカット](/ja/help/settings/keyboard-shortcuts/)

## セットアップに関する質問

### 初回セットアップ後にプロバイダーを変更できますか?

はい。 **[設定] -> [オーディオ]** で文字起こしを変更し、**[設定] -> LLM プロバイダー**で AI プロバイダーを変更できます。いずれかの設定を変更した後、短いテストを実行します。

### オンボーディングを続行できない場合はどうすればよいですか?

macOS 権限、プロバイダーの検証、および必須フィールドを確認してください。 Deepgram には有効なキーが必要ですが、ローカル Parakeet は API キーがなくても続行できます。
