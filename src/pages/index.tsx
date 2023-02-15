import styles from "../styles/pages/home.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>home | move.it</title>
      </Head>
      <div className={styles.homeBackground}>
        <div className={styles.container}>
          <img src="/logo-white.svg" alt="" />
          <h1>Bem-vindo(a)</h1>
          <div className={styles.loginContainer}>
            <div className={styles.loginType}>
              <img src="/github.svg" alt="" />
              <h3>
                Faça login com seu Github <br /> para começar
              </h3>
            </div>
            <button onClick={() => signIn("github")}>Entrar com Github</button>
          </div>
        </div>
      </div>
    </>
  );
}
