import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../components/layouts/MainLayout.module.css";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>

      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
