import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=4d7b3b261e7eeebf426f97cbfd87ab4c&&libraries=services,clusterer&autoload=false'
          strategy='beforeInteractive'
        />
      </body>
    </Html>
  );
}
