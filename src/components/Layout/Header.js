import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Container from "../Grid/Container"
import Navigation from "./Navigation"

const handleClass = (pathname, isOpenMenu) => {
  let style = 'header';

  if (pathname === '/cases' || isOpenMenu) {
    style += ' header_dark'
  }

  return style;
}

const Header = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(prev => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.overflow = 'auto';
      }

      return !prev
    })
  }

  return (
    <header className={handleClass(router.pathname, isOpenMenu)}>
      <Container>
        <div className="header__group">
          <Link className="header__logo logo" href='/'>
            nboris.dev
          </Link>

          <Navigation isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
