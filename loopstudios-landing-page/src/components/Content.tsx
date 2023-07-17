import { josefin } from "@/styles/fonts";
import { alata } from "@/styles/fonts";
import styles from "@/styles/c/Content.module.css";
import Creations from "./Creations";

export default function Content() {
  return (
    <main className={`${styles.wrapper} ${josefin.className}`}>
      <div className={styles.container}>
        <picture className={styles.image_interactive}>
          <source
            src={`/images/desktop/image-interactive.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`/images/mobile/image-interactive.jpg`}
            alt="man wearing VR goggles"
          />
        </picture>
        <div className={styles.copy}>
          <h2 className={styles.title}>The leader in interactive VR</h2>
          <p className={`${alata.className} ${styles.paragraph}`}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <Creations />
    </main>
  );
}
