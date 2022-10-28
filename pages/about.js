import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../components/layouts/MainLayout.module.css";

export default function About() {
  return (
    <MainLayout>
      <h1>About</h1>

      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
