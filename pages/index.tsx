import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home</h1>

      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
