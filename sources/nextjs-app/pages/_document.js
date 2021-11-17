import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const REACT_APP_CRAFTERCMS_SITE_ID = process.env.REACT_APP_CRAFTERCMS_SITE_ID;

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={`${PUBLIC_URL}/favicon.ico`} />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created with Crafter CMS and Wordify template"
          />
          <link rel="apple-touch-icon" href={`${PUBLIC_URL}/logo192.png`} />
          {/* <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} crossOrigin="use-credentials" />
          {/* <!--
            Notice the use of PUBLIC_URL in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "PUBLIC_URL/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
          --> */}

          <style jsx>{`
            body {
              font-family: sans-serif;
            }
            .circular-progress-spinner {
              display: flex;
              text-align: center;
              flex-direction: column;
              place-content: center;
            }
            .circular-progress-spinner__screen-height {
              height: 100vh;
            }
            .circular-progress-spinner--graphic-container {

            }
            .circular-progress-spinner--graphic {
              animation: rotate 2s linear infinite;
              height: 100px;
              position: relative;
              width: 100px;
            }
            .circular-progress-spinner--path {
              stroke-dasharray: 1, 200;
              stroke-dashoffset: 0;
              animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
              stroke-linecap: round;
            }
            .circular-progress-spinner--message {
              text-align: center;
            }
            @keyframes rotate {
              100% {
                transform: rotate(360deg);
              }
            }
            @keyframes dash {
              0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
              }
              50% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -35;
              }
              100% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -124;
              }
            }
            @keyframes color {
              100%, 0% {
                stroke: #d62d20;
              }
              40% {
                stroke: #0057e7;
              }
              66% {
                stroke: #008744;
              }
              80%, 90% {
                stroke: #ffa700;
              }
            }
          `}
          </style>

          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700|Inconsolata:400,700" rel="stylesheet" />

          <link rel="stylesheet" href="/static-assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/static-assets/css/animate.css" />
          <link rel="stylesheet" href="/static-assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/ionicons/css/ionicons.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/fontawesome/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/flaticon/font/flaticon.css" />
          {/* <!-- Theme Style: Edit @ sources/scss and build using sass compiler --> */}
          <link rel="stylesheet" href="/static-assets/css/style.css" />
          <script id="2fb5164e" type="text/plain">{`${REACT_APP_CRAFTERCMS_SITE_ID}`}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static-assets/js/jquery-3.2.1.min.js"></script>
          <script src="/static-assets/js/owl.carousel.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
