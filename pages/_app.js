import Router from 'next/router'
import { Montserrat, Noto_Sans_JP } from '@next/font/google'
import { GA_TRACKING_ID, pageview } from '../lib/gtag'

/*
 * Google Fonts を利用する
 *
 * - Montserrat
 * - Noto Sans JP
 */
const montserrat = Montserrat({ subsets: ['latin'] })
const noto_sans_jp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['-apple-system', 'Segoe UI', 'Helvetica Neue'],
})

if (GA_TRACKING_ID) {
  Router.events.on('routeChangeComplete', url => pageview(url))
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          padding: 0;
          margin: 0;
          font-family: ${noto_sans_jp.style.fontFamily};
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          font-size: 16px;
        }

        body {
          padding: 0;
          margin: 0;
          color: #222;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${montserrat.style.fontFamily},
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }

        img,
        iframe {
          max-width: 100%;
        }

        /* Prism のコードブロックに影響を与えず <code> にスタイルを追加 */
        code:not([class]) {
          font-family: monospace;
          font-size: 1rem;
          background-color: #eee;
          display: inline-block;
          padding: .2em .4em;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
