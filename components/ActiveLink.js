import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }) => {
  const router = useRouter();

  console.log(router);

  return <Link href={href}>{text}</Link>;
};
