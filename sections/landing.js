import utilStyles from "../shared/styles/utils.module.css";
export default function Landing() {
    return (
        <>
            <section className={utilStyles.headingMd}>
                <h1 className={utilStyles.title}>
                    Hi friends! I&apos;m Jessica&#9996;
                </h1>
                <p>
                    I&apos;m a 3rd year University of Waterloo Computer
                    Engineering student—and a slow knitter, em dash aficionado,
                    and the current Co-Director of Hack the North.
                </p>
                <p>
                    My website&apos;s a little empty right now, so come back in
                    a few weeks to see what it looks like!
                </p>
            </section>
            <section className={utilStyles.flexRow}>
                <a
                    href="https://github.com/jesszhz"
                    target="_blank"
                    rel="noreferrer"
                    className={utilStyles.links}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/jesszhz/"
                    target="_blank"
                    rel="noreferrer"
                    className={utilStyles.links}
                >
                    LinkedIn
                </a>
                <a
                    href="./resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={utilStyles.links}
                >
                    Resume
                </a>
            </section>
        </>
    );
}
