---
title: ExtraBrain を macOS にインストールする
description: 最新の ExtraBrain macOS リリースをインストールし、オンボーディングを完了し、権限を付与し、文字起こしを選択し、AI プロバイダーに接続します。
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

## サポートされているプラットフォーム

今日は ExtraBrain が macOS の最初です。 Windows と Linux は計画されており、現在の一般リリースの目標ではありません。

このヘルプセンターで説明されているデスクトップ オーバーレイ、ライブ録画コントロール、ローカル セッション履歴、スクリーンショット コンテキスト、プロバイダーのセットアップが必要な場合は、公式 macOS リリースを使用してください。

![ExtraBrain インストール後のオンボーディングようこそ画面](/assets/screenshots/help/dark/onboarding-welcome.png)

## 重要なポイント

ExtraBrain インストールは、ライブ セッションの前にデスクトップ アプリ、ライブ録画コントロール、ローカル セッション履歴、スクリーンショット、文字起こし、AI プロバイダーへのアクセスを準備する macOS セットアップ パスです。

- ExtraBrain は現在、Apple Silicon および Intel Mac を含む Mac をサポートしています。
- Windows と Linux は計画されており、現在の一般リリースの目標ではありません。
- 信頼性の高い最初のセットアップには、アプリの起動、マイクの許可、画面録画の許可、文字起こしの選択、プロバイダーの検証の 5 つのチェックがあります。
- ローカル Parakeet 転写には Deepgram API キーは必要ありません。オプションの Deepgram は、Deepgram アカウントを使用します。

## GitHub Releases からインストール

1. [ExtraBrain ダウンロード ページ](/ja/download/) を開きます。
2. 現在の macOS ビルドをダウンロードします。
3. ダウンロードしたインストーラーまたはアプリバンドルを開きます。
4. リリース手順で必要な場合は、アプリを「アプリケーション」に移動します。
5. ExtraBrain を起動します。

## 初回起動チェックリスト

- オンボーディングを完了します。
- マイク、画面録画、およびシステムオーディオの権限を付与します。
- ローカル Parakeet または Deepgram 転写を選択します。
- OpenAI、Anthropic、Claude サブスクリプション、Codex サブスクリプション、またはカスタム OpenAI-compatible エンドポイントを接続します。
- 実際の面接や会議で ExtraBrain を使用する前に、短いテスト セッションを 1 回実行してください。

macOS がマイクまたは画面へのアクセスをブロックする場合は、[macOS 権限の付与](/ja/help/getting-started/macos-permissions/) を開き、システム設定の回復手順に従います。

:::caution
初めてアプリをインストールする場合は、面接の 5 分前までに行わないでください。ライブ セッションのかなり前に、リリース、権限、転写、プロバイダーのセットアップをテストします。
:::

## 次

- [ExtraBrain を初めてセットアップする](/ja/help/getting-started/first-run-setup/)
- [macOS 権限を付与](/ja/help/getting-started/macos-permissions/)
- [AI プロバイダーに接続する](/ja/help/providers/connect-ai-provider/)

## インストールに関する質問

### ExtraBrain はどこからダウンロードすればよいですか?

公式 [ExtraBrain ダウンロード ページ](/ja/download/) を使用してください。現在の macOS リリースを指しており、古いサードパーティ ビルドを回避します。

### ExtraBrain をインストールした後は何をテストすればよいですか?

短いセッションを開始し、文字起こしが表示されることを確認し、スクリーンショットを 1 つキャプチャし、分析を 1 つ実行して、応答が選択したプロバイダーを使用していることを確認します。
