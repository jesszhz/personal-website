import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Jessica Zhang";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Jessica Zhang's personal website"
                />
                {/*TODO: Add open graph protocol*/}
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile_picture.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="Jessica Zhang"
                        />
                        <h1>JESSICA ZHANG</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile_picture.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt="Jessica Zhang"
                                />
                            </a>
                        </Link>
                        <h2>
                            <Link href="/">
                                <a>Jessica Zhang</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
