import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.name}>JZ</a>
            </Link>
        </nav>
    );
}

export default Navbar;
