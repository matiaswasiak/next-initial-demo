import { ActiveLink } from "./ActiveLink";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];

export const NavBar = () => {
  return (
    <nav>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
      {/* <ActiveLink text="Home" href="/">
        Home
      </ActiveLink>
      <ActiveLink text="About" href="/about">
        About
      </ActiveLink>
      <ActiveLink text="Contact" href="/contact">
        Contact
      </ActiveLink>
      <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  );
};
