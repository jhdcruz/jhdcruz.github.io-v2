import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          {/* Attach when in production */}
          {process.env.NODE_ENV === 'production' && (
            <>
              {/* Google Analytics v2 */}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-C9ZZGMKFJT"
              />
              <script async src="/gtag.js" />
            </>
          )}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="To be filled" />
          <meta
            name="keywords"
            content="portfolio, front-end, web, development, developer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
