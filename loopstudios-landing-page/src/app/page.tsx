"use client"
import Footer from "@/components/Footer";
import styles from "@/styles/p/page.module.css";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import Content from "@/components/Content";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
