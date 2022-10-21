import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Matias</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1>Home</h1>

        <h1 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h1>
      </main>
    </div>
  );
}
