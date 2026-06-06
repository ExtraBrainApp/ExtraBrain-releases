---
title: AI プロバイダーのセットアップ
description: ExtraBrain プロバイダー、API キー、サブスクリプション、カスタム エンドポイント、およびライブ分析用の文字起こしの選択肢を設定します。
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

セットアップに適合するプロバイダー ガイドを選択する必要がある場合は、この概要を使用してください。 ExtraBrain は、API キー プロバイダー、サブスクリプション プロバイダー モード、およびカスタム OpenAI-compatible エンドポイントをサポートします。

![ExtraBrain AI プロバイダー セレクター](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## 重要なポイント

ExtraBrain AI プロバイダーは、アプリがトランスクリプト、プロンプト、スクリーンショット、またはセッション コンテキストをライブ分析に変換するときに使用するモデル パスです。

- ExtraBrain は、Google Gemma 4 ローカル AI、OpenAI、Anthropic、Claude サブスクリプション、Codex サブスクリプション、およびカスタム OpenAI-compatible エンドポイントをサポートします。
- API キー モードには、現在のプロバイダーの資格情報が必要です。サブスクリプション モードでは、アプリでサポートされているサインインしたサブスクリプション パスが使用されます。
- プロバイダーの検証は、ライブのインタビュー、会議、講義、研究電話の前に一度テストする必要があります。
- プロバイダーの請求、保持、モデル アクセス、およびクォータは、選択したプロバイダー アカウントによって制御されます。

- [AI プロバイダーに接続する](/ja/help/providers/connect-ai-provider/)
- [OpenAI または Codex サブスクリプションを接続](/ja/help/providers/openai-codex-setup/)
- [Anthropic または Claude サブスクリプションを接続](/ja/help/providers/anthropic-claude-setup/)
- [カスタム OpenAI-compatible エンドポイントを使用する](/ja/help/providers/custom-openai-compatible-endpoint/)
- [Parakeet または Deepgram 転写を選択してください](/ja/help/providers/transcription-parakeet-vs-deepgram/)
- [アプリの価格とプロバイダーのコストを比較](/ja/pricing/)

## プロバイダー設定チェックリスト

1. API キー モード、サブスクリプション モード、またはカスタム エンドポイントのいずれが必要かを決定します。
2. **[設定] -> [LLM プロバイダー]** を開きます。
3. 必要なプロバイダーの詳細を入力します。
4. プロバイダー接続を検証または再確認します。
5. テスト分析を 1 つ実行します。
6. 機密性の高いコンテキストを使用する前に、[ExtraBrain によるデータの処理方法](/ja/help/privacy-security/how-extrabrain-handles-data/) を確認してください。

## プロバイダーの質問

### すべてのプロバイダー モードに API キーが必要ですか?

いいえ。OpenAI および Anthropic API キー モードにはキーが必要です。 Claude サブスクリプション モードと Codex サブスクリプション モードでは、サブスクリプション アクセスが使用され、ExtraBrain の API キーは必要ありません。

### プロバイダーの検証が失敗した場合は何を確認すればよいですか?

キー、モデルアクセス、ベース URL、サブスクリプションステータス、ネットワークアクセスを確認します。カスタム エンドポイントには、エンドポイントが予期する正確なモデル名も必要です。
