import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navConatiner}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/" className={styles.link}>
              Examples
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/" className={styles.link}>
              Resources
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
