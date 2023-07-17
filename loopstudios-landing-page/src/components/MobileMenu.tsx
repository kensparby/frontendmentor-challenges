import Link from "next/link";
import styles from "@/styles/MobileMenu.module.css";
import { useLayoutEffect, useState } from "react";

export default function MobileMenu({isMenuClosing}: {isMenuClosing: boolean}) {
  return (
    <div className={`${styles.menu} ${isMenuClosing && styles.closeAnimation}`}>
      <ul className={styles.ul}>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/careers">
          <li>Careers</li>
        </Link>
        <Link href="/events">
          <li>Events</li>
        </Link>
        <Link href="/products">
          <li>Products</li>
        </Link>
        <Link href="/support">
          <li>Support</li>
        </Link>
      </ul>
    </div>
  );
}
