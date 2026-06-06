---
title: Anthropic または Claude サブスクリプションを接続します
description: ExtraBrain で Anthropic API キー モードまたは Claude サブスクリプション モードを設定し、アクセスを検証し、モデルを選択し、サインインのトラブルシューティングを行います。
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain は、Anthropic API キー モードと Claude サブスクリプション モードをサポートします。

## Anthropic API キーモード

このモードは、管理する API キーを介して ExtraBrain が Anthropic を呼び出す場合に使用します。

1. **[設定] -> [LLM プロバイダー]** を開きます。
2. **Anthropic** を選択します。
3. Anthropic API キーを貼り付けます。
4. モデルを選択してください。
5. キーを検証します。
6. 短いテスト分析を実行します。

![Anthropic が選択されたLLM プロバイダー設定タブ](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude サブスクリプション モード

ExtraBrain が Claude Pro または Max サブスクリプションを直接使用する場合は、Claude サブスクリプションを使用します。このモードでは、ExtraBrain の API キーは必要ありません。

1. **[設定] -> [LLM プロバイダー]** を開きます。
2. **Claude サブスクリプション** を選択します。
3. サインイン状態を再確認します。
4. 利用可能なモデルを選択してください。
5. テスト分析を実行します。

## トラブルシューティング

検証が失敗した場合は、API キーが正しい Anthropic アカウントに属し、モデルへのアクセス権があり、余分なスペースなしで貼り付けられていることを確認してください。サブスクリプション モードの場合は、Claude サブスクリプションがアクティブであり、ExtraBrain が予期している場所にサインインしていることを確認します。

## Anthropic および Claude の質問

### Claude サブスクリプション モードには Anthropic API キーが必要ですか?

いいえ。Claude サブスクリプション モードは、Claude Pro または最大サブスクリプション アクセスを対象としており、ExtraBrain 内の Anthropic API キーは必要ありません。

### Anthropic または Claude に送信できるデータは何ですか?

分析用に選択すると、関連するプロンプト、トランスクリプト コンテキスト、スクリーンショットから派生したコンテキスト、およびカスタムの質問が、そのプロバイダー モードに応じて Anthropic または Claude に送信されることがあります。
