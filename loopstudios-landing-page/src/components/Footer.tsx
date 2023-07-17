import styles from "@/styles/c/Footer.module.css";
import Image from "next/image";
import LogoImage from "@/images/logo.svg";
import Nav from "@/components/Nav";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <Image src={LogoImage} width={150} alt="" />
        <Nav />
        <Socials styles={styles.socials} />
        <span className={`${styles.copyright}`}>
          © 2023 Loopstudios. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
