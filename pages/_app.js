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
        html {
          font-family: ${noto_sans_jp.style.fontFamily};
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          font-size: 16px;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${montserrat.style.fontFamily},
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
