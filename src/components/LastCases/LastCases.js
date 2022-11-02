import Link from "next/link";

const LastCases = () => {
  return (
    <section>
      <h2>Последние <span>работы</span></h2>
      <ul>
        <li>
          <article>
            <h3>ПластПолиэфир</h3>
            <p>Корпоративный</p>
            <Link href={'#'}></Link>
          </article>
        </li>
        <li>
          <article>
            <h3>Автошкола Перекресток</h3>
            <p>Корпоративный</p>
            <Link href={'#'}></Link>
          </article>
        </li>
        <li>
          <article>
            <h3>Аквилон</h3>
            <p>Корпоративный</p>
            <Link href={'#'}></Link>
          </article>
        </li>
        <li>
          <article>
            <h3>Филиал МАИ</h3>
            <p>Образование</p>
            <Link href={'#'}></Link>
          </article>
        </li>
      </ul>
      <Link href={'/cases'}>Все работы</Link>
    </section>
  );
};

export default LastCases;
