import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Preconnecting to font servers */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link rel="preconnect" href="https://api.fontshare.com" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
