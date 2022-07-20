import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <meta charset="UTF-8"></meta>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi friends! I&apos;m Jessica&#9996;</p>
                <p>
                    I&apos;m a 3rd year University of Waterloo Computer Engineering
                    student—and a slow knitter, em dash aficionado, and the
                    current Co-Director of Hack the North.
                </p>
                <p>
                    My website's a little empty right now, so come back in a few
                    weeks to see what it looks like!
                </p>
            </section>
            <section className={utilStyles.flexRow}>
                <a
                    href="https://github.com/jesszhz"
                    target="_blank"
                    className={utilStyles.links}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/jesszhz/"
                    target="_blank"
                    className={utilStyles.links}
                >
                    LinkedIn
                </a>
                <a href="./resume.pdf" target="_blank" className={utilStyles.links}>Resume</a>
            </section>
        </Layout>
    );
}
