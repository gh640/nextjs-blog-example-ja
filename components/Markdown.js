/**
 * 共通のマークダウンレンダラー
 */
import * as React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

const Markdown = ({ children }) => {
  // Markdown 中の HTML を許容するために `rehypeRaw` を利用する
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      // See: https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
