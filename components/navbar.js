import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar({ hideTitle = false }) {
    return (
        <nav className={styles.navbar}>
            {!hideTitle && (
                <Link href="/">
                    <a className={styles.name}>JZ</a>
                </Link>
            )}
            {/* !hideTitle && (
                <Link href="/knits">
                    <a className={styles.link}>Knits</a>
                </Link>
            ) */}
            {/* !hideTitle && (
                <Link href="/writing">
                    <a className={styles.link}>Writing</a>
                </Link>
            ) */}
        </nav>
    );
}

export default Navbar;
