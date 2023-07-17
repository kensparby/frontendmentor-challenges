import styles from "@/styles/c/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.nav_link}>
          <a>About</a>
        </li>
        <li className={styles.nav_link}>
          <a>Careers</a>
        </li>
        <li className={styles.nav_link}>
          <a>Events</a>
        </li>
        <li className={styles.nav_link}>
          <a>Products</a>
        </li>
        <li className={styles.nav_link}>
          <a>Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
