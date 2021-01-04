---
title: コードをきれいに見えるようにしました
published: 2038-03-21
---

サンプルです。

`[slug].js`:

```js
/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const content = await readContentFile({ fs, slug: params.slug })

  return {
    props: {
      ...content
    }
  }
}
```
