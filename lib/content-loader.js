import path from "path"

import remark from "remark"
import html from "remark-html"
import matter from "gray-matter"

import { formatDate } from "./date"

const DIR = path.join(process.cwd(), "content/posts")
const EXTENSION = ".md"

/**
 * Markdown のファイル一覧を取得する
 */
const listContentFiles = ({ fs }) => {
  const filenames = fs.readdirSync(DIR)
  return filenames
    .filter((filename) => path.parse(filename).ext === EXTENSION)
}

/**
 * Markdown のファイルの中身を全件パースして取得する
 */
const readContentFiles = async ({ fs }) => {
  const promisses = listContentFiles({ fs })
    .map((filename) => readContentFile({ fs, filename }))

  const contents = await Promise.all(promisses)

  return contents.sort(sortWithProp('published', true))
}

/**
 * Markdown のファイルの中身をパースして取得する
 */
const readContentFile = async ({ fs, slug, filename }) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
  }
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8')
  const matterResult = matter(raw)

  const { title, published: rawPublished } = matterResult.data

  const parsedContent = await remark()
    .use(html)
    .use(() => genAttrsAdder("image", {loading: "lazy"}))
    .process(matterResult.content)
  const content = parsedContent.toString()

  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
  }
}

/**
 * Markdown の投稿をソートするためのヘルパー
 */
const sortWithProp = (name, reversed) => (a, b) => {
  if (reversed) {
    return a[name] < b[name] ? 1 : -1
  } else {
    return a[name] < b[name] ? -1 : 1
  }
}

/**
 * 指定された node attributes を追加する remark プロセッサ
 */
const genAttrsAdder = (type, attrs) => {
  return transformer

  function transformer(node) {
    if (node.type === type) {
      node.data = node.data || {}
      node.data.hProperties = Object.assign({}, node.data.hProperties, attrs)
    }

    if (node.children) {
      node.children.map((child) => transformer(child))
    }
  }
}

export { listContentFiles, readContentFiles, readContentFile }
