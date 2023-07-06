// import facebook icon from react-icons
import styles from "@/styles/c/Socials.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Socials = (props: { styles: string }) => {
  return (
    <div className={props.styles}>
      <a className={styles["social-icon"]}>
        <FaFacebookSquare size="1.75rem" />
      </a>
      <a className={styles["social-icon"]}>
        <FaTwitter size="1.75rem" />
      </a>
      <a className={styles["social-icon"]}>
        <FaPinterest size="1.75rem" />
      </a>
      <a className={styles["social-icon"]}>
        <FaInstagram size="1.75rem" />
      </a>
    </div>
  );
};

export default Socials;
