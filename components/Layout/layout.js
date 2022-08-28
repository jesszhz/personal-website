import styles from "./layout.module.css";
import utilStyles from "../../shared/styles/utils.module.css";
import Head from "next/head";
import Navbar from "../Navbar/navbar";
import Image from "next/image";

import jessicaPic from "../../public/images/profile.jpg";

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
                                src={jessicaPic}
                                className={utilStyles.borderCircle}
                                height={240}
                                width={240}
                                alt="Jessica Zhang"
                            />
                        </span>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src={jessicaPic}
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt="Jessica Zhang"
                                />
                            </a>
                        </Link>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}
