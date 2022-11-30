import Social from "../Social/Social"
import { email } from "../../data/contacts";
import Menu from "../Menu/Menu";
import Container from "../Grid/Container";

const Navigation = ({ isOpenMenu, handleToggleMenu }) => {
  return (
    <nav className="header_nav nav">
      <button
        className={`menu-toggle ${isOpenMenu ? 'menu-toggle_active' : ''}`}
        aria-label="Открыть/закрыть меню"
        onClick={handleToggleMenu}
      >
        <span></span>
      </button>
      <div className={`nav__menu ${isOpenMenu ? 'nav__menu_active' : ''}`}>
        <Container>
          <div className="nav__group">
            <Menu />
            <div className="nav__contacts">
              <a className="nav__email email" href={`mailto:${email}`}>{email}</a>
              <Social className="nav__social" />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navigation;
