import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <>
              {/*<Global site tag (gtag.js) - Google Analytics*/}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-C9ZZGMKFJT"
              />
              <script async src="/gtag.js" />
            </>
          )}
          <meta charSet="utf-8" />
          <meta name="description" content="To be filled" />
          <meta name="copyright" content="Joshua Hero Dela Cruz" />
          <meta
            name="keywords"
            content="portfolio, front-end, web, development, developer"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&display=swap"
            rel="stylesheet"
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
