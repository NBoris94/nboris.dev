import Link from "next/link";
import Col from "../Grid/Col";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Section from "../Layout/Section";
import Arrow from "../ui/Arrow";
import Btn from "../ui/Btn";

const LastCases = () => {
  return (
    <Section className='last-cases'>
      <Container>
        <h2 className="last-cases__title section__title h2">Последние <span className="gradient gradient_blue">работы</span></h2>
        <ul className="last-cases__cards">
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
                <h3 className="case-card__title h3">Автошкола Перекресток</h3>
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
                <h3 className="case-card__title h3">Аквилон</h3>
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
                <h3 className="case-card__title h3">Филиал МАИ</h3>
                <p className="case-card__category">Образование</p>
                <Arrow className="case-card__arrow" />
              </Link>
              <figure className="case-card__img"></figure>
              <p className="case-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </article>
          </li>
        </ul>
        <Row>
          <Col></Col>
          <Col>
            <Btn
              className="last-cases__more"
              isLink
              href="/cases"
              text="Все работы"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default LastCases;
