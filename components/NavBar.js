import { ActiveLink } from "./ActiveLink";

export const NavBar = () => {
  return (
    <nav>
      <ActiveLink text="Home" href="/">
        Home
      </ActiveLink>
      <ActiveLink text="About" href="/about">
        About
      </ActiveLink>
      <ActiveLink text="Contact" href="/contact">
        Contact
      </ActiveLink>
    </nav>
  );
};
