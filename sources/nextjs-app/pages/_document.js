/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
          <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} crossOrigin="use-credentials" />
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700|Inconsolata:400,700&display=optional" rel="stylesheet" />
          <link rel="stylesheet" href="/static-assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/static-assets/css/animate.css" />
          <link rel="stylesheet" href="/static-assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/ionicons/css/ionicons.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/fontawesome/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/static-assets/fonts/flaticon/font/flaticon.css" />
          <link rel="stylesheet" href="/static-assets/css/style.css" />
          <script id="2fb5164e" type="text/plain">{`${REACT_APP_CRAFTERCMS_SITE_ID}`}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
