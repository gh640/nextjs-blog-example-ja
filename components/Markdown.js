/**
 * 共通のマークダウンレンダラー
 */
import * as React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import prism from "prismjs"

import "prismjs/themes/prism.css"
import "prismjs/themes/prism-twilight.css"

const Markdown = ({ children }) => {
  React.useEffect(() => {
    prism.highlightAll()
  })

  // Markdown 中の HTML を許容するために `rehypeRaw` を利用する
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
