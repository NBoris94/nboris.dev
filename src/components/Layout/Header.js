import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a>Logo</a>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
