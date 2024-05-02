import Head from "next/head";
import Image from "next/image";
import styles from "_app/pages/index.module.css";

export default function Testepage() {
  return (
    <div className={styles.title}>
        <h1>Pagina de Login</h1>
        <p>nome:</p>
        <button>Login</button>
    </div>
  );
}