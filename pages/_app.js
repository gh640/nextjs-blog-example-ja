import Router from 'next/router'

import { GA_TRACKING_ID, pageview } from '../lib/gtag'

if (GA_TRACKING_ID) {
  Router.events.on('routeChangeComplete', url => pageview(url))
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
