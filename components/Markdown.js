/**
 * 共通のマークダウンレンダラー
 */
import * as React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import prism from "prismjs"

import "prismjs/themes/prism.css"
import "prismjs/themes/prism-twilight.css"

const Markdown = ({ children }) => {
  React.useEffect(() => {
    prism.highlightAll()
  })

  // Markdown 中の HTML を許容するために `rehypeRaw` を利用する
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
  )
}

export default Markdown
