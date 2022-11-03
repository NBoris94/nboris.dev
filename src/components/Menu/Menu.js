import Link from "next/link"
import { menu } from "../../data/menu"

const Menu = () => {
  return (
    <ul className="menu">
      {menu.map(m => (
        <li className="menu__item" key={m.id}>
          <Link className="menu__link" href={m.link}>{m.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
