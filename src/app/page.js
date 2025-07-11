import styles from "./page.module.css";

import Cursos from "@/components/pages/home/0 - Cursos";
import Courses from "@/components/pages/home/1 - professores";
import About from "@/components/pages/home/2 - about";
import Cta from "@/components/pages/home/3 - cta";
import Contact from "@/components/pages/home/4 - contact";




export default function Home() {
  return (
    <div className={styles.page}>

      <Cursos />

      <Courses />

      <About />

      <Cta />

      <Contact />

    </div>
  );
}
