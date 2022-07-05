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
                <p>Hi friends! I'm Jessica&#9996;</p>
                <p>
                    I'm a 3rd year University of Waterloo Computer Engineering
                    student—and a slow knitter, em dash aficionado, and the
                    current Co-Director of Hack the North.
                </p>
            </section>
            <section className={utilStyles.flexRow}>
                <a href="/" className={utilStyles.links}>
                    GitHub
                </a>
                <a className={utilStyles.links}>LinkedIn</a>
                <a className={utilStyles.links}>Resume</a>
            </section>
        </Layout>
    );
}
