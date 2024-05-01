import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Login() {
  return (
    <div>
        <form>
        <label>
            Nome de usuário:
            <input type="text" value="username" required /> <br/>
        </label>
        <label>
            Email:
            <input type="email" value="email" required /> <br/>
        </label>
        <label>
            CEP:
            <input type="text" value="CEP" required /> <br/>
        </label>
        <label>
            Senha:
            <input type="password" value="Password" required /> <br/>
        </label>
        <input type="submit" value="Criar conta" />
        </form>
    </div>
  );
}