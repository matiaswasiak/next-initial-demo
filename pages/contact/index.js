import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/MainLayout.module.css";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact</h1>

      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
