import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navConatiner}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Home
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Examples
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Resources
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
