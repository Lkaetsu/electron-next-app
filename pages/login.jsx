import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
        <h1>Pagina de Login</h1>
        <p>nome:</p>
        <button>Login</button>
    </div>
  );
}