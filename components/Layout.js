import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props

  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>後藤のブログ</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <footer>
        &copy; 後藤
      </footer>

      <style jsx>{`
        .page {
          padding: 2em 1em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 4em;
        }

        .site-title a {
          color: inherit;
          text-decoration: none;
        }

        footer {
          margin-top: 4em;
          padding-top: 2em;
          padding-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          color: #222;
        }

        img,
        iframe {
          max-width: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Layout
