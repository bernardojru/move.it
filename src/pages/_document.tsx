import Document, { Head, Html, Main, NextScript } from "next/document";

// Aqui colocamos tudo que é estático independente da tela trocar

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
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
