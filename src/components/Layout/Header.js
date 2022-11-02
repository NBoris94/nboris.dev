import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Link href='/'>
        nboris.dev
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
