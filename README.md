[![テスト](https://github.com/gh640/nextjs-blog-example-ja/actions/workflows/tests.yml/badge.svg)](https://github.com/gh640/nextjs-blog-example-ja/actions/workflows/tests.yml)

# `nextjs-blog-example-ja`

React ベースのフレームワーク [Next.js](https://nextjs.org/) でシンプルなブログを作るサンプルです。

次のページにこのリポジトリのコードを使ったチュートリアルがあります:

- [Next.js を使った JAMstack なブログの始め方 | gotohayato.com](https://gotohayato.com/content/517/)

## 動作環境

- Node v14

## 使用ライブラリ

以下の NPM パッケージを使用しています。

- `next`
- `react`
- `react-dom`
- `remark`
- `remark-html`
- `remark-prism`
- `gray-matter`

Next.js を利用するために必要な `next` `react` `react-dom` の 3 つと、 frontmatter 付きの Markdown の HTML への変換に有用な `remark` `remark-html` `gray-matter` を使っています。
追加で、シンタックスハイライトに Prism.js を利用するための `remark-prism` を使っています。

自動テストには以下のパッケージを使用しています。

- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `babel-jest`
- `identity-obj-proxy`
- `jest`
- `react-test-renderer`

## 使い方

### GitHub Codespaces でとりあえず動かしてみる

Codespaces でこのリポジトリを開きます。

Codespaces の Visual Studio Code が開いたら「 Terminal 」のところから NPM パッケージをインストールします（ Codespaces が自動的にインストールすることもあります）。

```bash
npm install
```

開発用プレビューを起動します。

```bash
npm run dev
```

ポート `3000` が開いてポートフォワーディングが行われるのでその URL を開きます。

試し終わったら Codespaces のスペースを破棄します。

### 開発環境で動かす

```bash
# リポジトリをチェックアウト
git checkout https://github.com/gh640/nextjs-blog-example-ja.git

# プロジェクトルートに移動
cd nextjs-blog-example-ja/

# npm の依存パッケージをインストール
npm install

# 開発サーバーを走らせる
# 開発サーバーを止めたい場合は ctrl + c 等で
npm run dev
```

### 公開用に静的サイトを生成する

```bash
# ビルド
npm run build

# 静的サイトを生成して　`out/` ディレクトリに出力する
npm run export
```

### Google Analytics のトラッキングコードを入れる

環境変数 `GA_TRACKING_ID` でトラッキング ID をセットすれば、 Google Analytics のトラッキングコードをページに埋め込むことができます。

環境変数はターミナルでセットする方法と `.env.local` ファイルを使用する方法が用意されているので、どちらでもやりやすい方を選んでください。

ターミナル:

```bash
export GA_TRACKING_ID=UA-XXX-XX
```

`.env.local` ファイル:

```text
GA_TRACKING_ID=UA-XXX-XX
```

具体的にどのような形でトラッキングコードが埋め込まれているか知りたい場合は、プロジェクト内の `GA_TRACKING_ID` の使用箇所を探してみてください。

```bash
rg GA_TRACKING_ID
```

参考:

- [Basic Features: Environment Variables | Next.js](https://nextjs.org/docs/basic-features/environment-variables)

### Prism のテーマを変更する

`pages/posts/[slug].js` で読み込むテーマ用 CSS ファイルを変更すれば、コードのシンタックスハイライトのテーマを変更できます。

```js
import "prismjs/themes/prism-funky.css"
```

Prism には以下のテーマが同梱されています。

- `prism-coy.css`
- `prism-dark.css`
- `prism-funky.css`
- `prism-okaidia.css`
- `prism-solarizedlight.css`
- `prism-tomorrow.css`
- `prism-twilight.css`

## 自動テストを走らせる

```bash
npm test
# または
npm run test
```
