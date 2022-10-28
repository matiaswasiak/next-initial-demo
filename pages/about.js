import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <h1>About</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
