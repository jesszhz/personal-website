import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Navbar from "./navbar.js";
import Home from "../pages/index.js";
import Blog from "../pages/writing.js";
import Knits from "../pages/knits.js";

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
            <Navbar />
            <header className={styles.header}>
                {home ? (
                    <>
                        <span>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={240}
                                width={240}
                                alt="Jessica Zhang"
                            />
                        </span>
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
