import Image from "next/image"
import Link from "next/link"
import Section from "../Layout/Section"
import Container from "../Grid/Container"
import Row from "../Grid/Row"
import Col from "../Grid/Col"
import Btn from "../ui/Btn"
import me from "../../../public/img/me_about.jpg"

const ShortAbout = () => {
  return (
    <Section className="short-about">
      <Container>
        <h2 className="short-about__title section__title h2">Обо <span className="gradient gradient_pink">мне</span></h2>
        <Row>
          <Col>
            <figure className="short-about__img">
              <Image
                src={me}
                alt={''}
                width={675}
                height={770}
              />
            </figure>
          </Col>
          <Col>
            <p className="short-about__text text">
              Привет, меня зовут Новиков Борис. Этот сайт я решил сделать для того, чтобы показать свои работы и навыки.
            </p>
            <p className="short-about__text text">
              Основная моя деятельность - это преподавание в вузе. Но все остальное время я посвящаю семье, разработке и капельку компьютерным играм.
            </p>
            <p className="short-about__text text">
              С детства я увлекался компьютерными играми и хотел стать их разработчиком, так что мне всегда было понятно чем я буду заниматься. Уже в студенческие годы я понял, что хочу разрабатывать сайты и web-приложения.
            </p>
            <p className="short-about__text text">
              Но также в это время я понял, что имею навык обучать других и хочу делиться своими знаниями, поэтому выбрал направление преподавания.
            </p>
            <p className="short-about__text text">
              Считаю что обучение и разработка близки друг другу, так как технологии стремительно развиваются и разработчик всегда должен стремиться преобрести новые навыки. В итоге я совместил приятное с полезным, обучая других, я обучаюсь сам.
            </p>
            <Btn
              className='short-about__more'
              mods='btn_dark'
              isLink
              href={'/about'}
              text="Подробнее обо мне"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ShortAbout;
