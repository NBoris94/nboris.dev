import Link from "next/link"

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link menu__link_blue-gradient" href="/">Главная</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link menu__link_green-gradient" href="/cases">Портфолио</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link menu__link_pink-gradient" href="/about">Обо мне</Link>
      </li>
    </ul>
  );
}

export default Menu;
