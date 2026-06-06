---
title: AI プロバイダーに接続する
description: OpenAI、Anthropic、Claude サブスクリプション、Codex サブスクリプション、または ExtraBrain のカスタム OpenAI-compatible エンドポイントを設定します。
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain は、ライブ分析用に選択した AI プロバイダーを使用します。プロバイダーのセットアップは、プロンプト、トランスクリプト コンテキスト、およびスクリーンショットから派生したコンテキストの送信先を制御します。

![ExtraBrain オンボーディングの AI プロバイダー選択](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## パブリックプロバイダーモード

- OpenAI API キー。
- Anthropic API キー。
- Codex API キーを使用せずに、ChatGPT Plus または Pro を直接使用するサブスクリプション。
- Claude API キーを使用せずに、Claude Pro または Max を直接使用するサブスクリプション。
- ベース URL、API キー、およびモデル名を含むカスタム OpenAI-compatible エンドポイント。

## セットアップチェックリスト

1. オンボーディングまたは **[設定] -> LLM プロバイダー** を開きます。
2. プロバイダー ファミリを選択します。
3. API キーまたはサブスクリプション モードを選択します。
4. 必要に応じて資格情報を入力します。
5. 接続を検証または再確認します。
6. 短いテスト分析を実行します。

![LLM プロバイダー設定タブ](/assets/screenshots/help/dark/settings-llm-providers.png)

## データフロー

クラウド プロバイダーによる分析を ExtraBrain に依頼すると、関連するプロンプト、トランスクリプトのコンテキスト、スクリーンショットから得られたコンテキスト、およびカスタムの質問がそのプロバイダーに送信される場合があります。プロバイダーの請求、保持、クォータ、およびアカウント制御は、選択したプロバイダーによって管理されます。

## 関連している

- [OpenAI または Codex サブスクリプションを接続](/ja/help/providers/openai-codex-setup/)
- [Anthropic または Claude サブスクリプションを接続](/ja/help/providers/anthropic-claude-setup/)
- [カスタム OpenAI-compatible エンドポイントを使用する](/ja/help/providers/custom-openai-compatible-endpoint/)
- [ExtraBrain の価格設定とプロバイダー費用の分離を確認する](/ja/pricing/)

## AI プロバイダーに関する質問

### 最初にどの AI プロバイダーを選択すればよいでしょうか?

すでに信頼でき、実際のセッションの前に検証できるプロバイダーを選択してください。ほとんどのユーザーにとって、これは既存の OpenAI、Anthropic、Claude、または Codex アカウントから始めることを意味します。

### 複数のプロバイダー パスを準備しておくことはできますか?

はい。バックアップ プロバイダー パスを保持しておくと、クォータ、ネットワーク アクセス、アカウント ステータスが変更される可能性がある面接や会議の前に役立ちます。
