# zume-blog

```sh
git clone git@github.com:masato5579/zume-blog.git
```

## 🚀 プロジェクト構成

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 🧞 コマンド

すべてのコマンドは、プロジェクトのルートからターミナルで実行します:

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 依存関係をインストール                            |
| `pnpm dev`             | ローカル開発サーバーを`localhost:4321`で開始      |
| `pnpm build`           | 本番サイトを`./dist/`にビルド                      |
| `pnpm preview`         | デプロイ前にビルドをローカルでプレビュー           |
| `pnpm astro ...`       | `astro add`や`astro check`などのCLIコマンドを実行 |
| `pnpm astro -- --help` | Astro CLIのヘルプを表示                             |
