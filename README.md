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
