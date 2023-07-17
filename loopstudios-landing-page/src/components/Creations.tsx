import { josefin } from "@/fonts";
import styles from "@/styles/c/Creations.module.css";
import Link from "next/link";
import data from "@/data.json";

export default function Creations() {
  const posts = Object.entries(data).map((post) => {
    const { id, title, image } = post[1];
    return (
      <Link href="/" key={id} className={`${styles.card} ${josefin.className}`}>
        <article className={styles.creation}>
          <h3 className={styles.postTitle}>{title}</h3>
          <picture className={styles.image}>
            <source
              srcSet={`/images/mobile/${image}`}
              media="(max-width: 700px)"
            />
            <img src={`/images/desktop/${image}`} alt="" />
          </picture>
        </article>
      </Link>
    );
  });
  return (
    <section className={styles.creationsWrapper}>
      <h2 className={`${styles.sectionTitle} ${josefin.className}`}>
        Our Creations
      </h2>
      <div className={styles.cardsWrapper}>{posts}</div>
      <Link className={styles.linkBtn} href={"/"}>
        SEE ALL
      </Link>
    </section>
  );
}
