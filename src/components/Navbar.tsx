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
            <div className={styles.dropdown}>
              <button type="button" className={styles.dropdownButton}>
                Examples
              </button>
              <div className={styles.dropdownContainer}>
                <ol className={styles.dropdownMenu}>
                  <li className={styles.dropdownListItem}>
                    <Link
                      to="/example/beginner3xweek"
                      className={styles.dropdownLink}
                    >
                      Beginner - 3x Week
                    </Link>
                  </li>
                  <li className={styles.dropdownListItem}>
                    <Link
                      to="/example/beginner4xweek"
                      className={styles.dropdownLink}
                    >
                      Beginner - 4x Week
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </li>
          <li className={styles.listItem}>
            <Link to="/resources" className={styles.link}>
              Resources
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
