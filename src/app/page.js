
import styles from "./page.module.css";

import CtaSlider from "@/components/home/0 - ctaSlider";
import Courses from "@/components/home/1 - courses";
import About from "@/components/home/2 - about";
import Cta from "@/components/home/3 - cta";
import Contact from "@/components/home/4 - contact";

export default function Home() {
  return (
    <div className={styles.page}>

      <CtaSlider />

      <Courses />

      <About />

      <Cta />

      <Contact />

    </div>
  );
}
