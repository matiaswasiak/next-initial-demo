import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Matias</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1>Contact</h1>

        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>
      </main>
    </div>
  );
}
