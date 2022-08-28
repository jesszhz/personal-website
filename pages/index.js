import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import Landing from "../sections/landing";
import Experience from "../sections/Experience/experience";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <meta charset="UTF-8"></meta>
            </Head>
            <Landing></Landing>
            <Experience></Experience>
        </Layout>
    );
}
