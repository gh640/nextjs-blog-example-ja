import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "サンプルブログ"

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/" style={{
            // `<style jsx>` ではスタイルをつけられないのでインラインで設定する
            color: 'inherit',
            textDecoration: 'none',
          }}>
            <span className="site-title-text">{siteTitle}</span>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : null}
        <div className="page-main">
          {children}
        </div>
      </main>

      <footer>
        &copy; {siteTitle}
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

        footer {
          margin-top: 4em;
          padding-top: 2em;
          padding-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Layout
