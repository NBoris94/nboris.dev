import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <button>Открыть меню</button>
      <div>
        <ul>
          <li>
            <Link href={'/'}>Главная</Link>
          </li>
          <li>
            <Link href={'/cases'}>Портфолио</Link>
          </li>
          <li>
            <Link href={'/about'}>Обо мне</Link>
          </li>
        </ul>
        <div>
          <a href="mailto:hello@nboris.dev">hello@nboris.dev</a>
          <ul>
            <li><a href="#">vkontakte</a></li>
            <li><a href="#">github</a></li>
            <li><a href="#">telegram</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
