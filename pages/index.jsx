import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <a id='Login card' href="http://localhost:3000/login" className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>click para logar na sua conta</p>
      </a>
      <a id='SignUp card'href="http://localhost:3000/signup" className={styles.card}>
            <h3>Signup &rarr;</h3>
            <p>click para criar uma conta</p>
      </a>
  </div>  
  );
}
