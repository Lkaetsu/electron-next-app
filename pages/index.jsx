import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <a href="http://localhost:3000/login" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
    </div>
  );
}
