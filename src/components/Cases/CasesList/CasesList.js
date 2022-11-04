import Link from "next/link";
import Arrow from "../../ui/Arrow";

const CasesList = ({ className, isLastCases }) => {
  return (
    <ul className={`${className} cases-list`}>
      <li>
        <article className="case-card">
          <Link className="case-card__link" href={'#'}>
            <h3 className="case-card__title h3">ПластПолиэфир</h3>
            <p className="case-card__category">Корпоративный</p>
            <Arrow className="case-card__arrow" />
          </Link>
          <figure className="case-card__img"></figure>
          <p className="case-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>
      </li>
      <li>
        <article className="case-card">
          <Link className="case-card__link" href={'#'}>
            <h3 className="case-card__title h3">ПластПолиэфир</h3>
            <p className="case-card__category">Корпоративный</p>
            <Arrow className="case-card__arrow" />
          </Link>
          <figure className="case-card__img"></figure>
          <p className="case-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>
      </li>
      <li>
        <article className="case-card">
          <Link className="case-card__link" href={'#'}>
            <h3 className="case-card__title h3">ПластПолиэфир</h3>
            <p className="case-card__category">Корпоративный</p>
            <Arrow className="case-card__arrow" />
          </Link>
          <figure className="case-card__img"></figure>
          <p className="case-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>
      </li>
      <li>
        <article className="case-card">
          <Link className="case-card__link" href={'#'}>
            <h3 className="case-card__title h3">ПластПолиэфир</h3>
            <p className="case-card__category">Корпоративный</p>
            <Arrow className="case-card__arrow" />
          </Link>
          <figure className="case-card__img"></figure>
          <p className="case-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>
      </li>
    </ul>
  );
}

export default CasesList;
