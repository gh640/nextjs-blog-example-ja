# `nextjs-blog-example-ja`

React ベースのフレームワーク [Next.js](https://nextjs.org/) でシンプルなブログを作るサンプルです。

次のページにこのリポジトリのコードを使ったチュートリアルがあります:

- [Next.js を使った JAMstack なブログの始め方 | gotohayato.com](https://gotohayato.com/content/517/)

## 使用ライブラリ

以下の NPM パッケージを使用しています。

- `next`
- `react`
- `react-dom`
- `remark`
- `remark-html`
- `gray-matter`

Next.js を利用するために必要な `next` `react` `react-dom` の 3 つと、 frontmatter 付きの Markdown の HTML への変換に有用な `remark` `remark-html` `gray-matter` を使っています。

## 使い方

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
