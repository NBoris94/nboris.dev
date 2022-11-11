import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { motion as m } from "framer-motion"
import Container from "../Grid/Container"
import Navigation from "./Navigation"

const headerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 1.9
    }
  }
}

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
    setIsOpenMenu(prev => !prev)
  }

  return (
    <header className={handleClass(router.pathname, isOpenMenu)}>
      <Container>
        <m.div className="header__group"
        variants={headerAnimation}
          initial="hidden"
          animate="show">
          <Link className="header__logo logo" href='/'>
            nboris.dev
          </Link>

          <Navigation isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu} />
        </m.div>
      </Container>
    </header>
  );
}

export default Header;
