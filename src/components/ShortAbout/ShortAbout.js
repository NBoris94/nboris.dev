import Image from "next/image"
import { motion as m } from "framer-motion"
import Section from "../Layout/Section"
import Container from "../Grid/Container"
import Row from "../Grid/Row"
import Col from "../Grid/Col"
import Btn from "../ui/Btn"
import me from "../../../public/img/me_about.jpg"
import SectionTitle from "../Layout/SectionTitle"
import { imageAnimation, textAnimation, btnAnimation } from "../../lib/animation"

const ShortAbout = () => {
  return (
    <Section className="short-about">
      <Container>
        <SectionTitle className="short-about__title">
          Обо <span className="gradient gradient_pink">мне</span>
        </SectionTitle>
        <Row>
          <Col>
            <figure className="short-about__img">
              <m.div
                className="img-wrapper"
                variants={imageAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Image
                  src={me}
                  alt={''}
                  width={675}
                  height={770}
                />
              </m.div>
            </figure>
          </Col>
          <Col>
            <m.p
              className="short-about__text text"
              variants={textAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Привет, меня зовут Новиков Борис. Этот сайт я решил сделать для того, чтобы показать свои работы и навыки.
            </m.p>
            <m.p
              className="short-about__text text"
              variants={textAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
              Основная моя деятельность - это преподавание в вузе. Но все остальное время я посвящаю семье, разработке и капельку компьютерным играм.
            </m.p>
            <m.p
              className="short-about__text text"
              variants={textAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
              С детства я увлекался компьютерными играми и хотел стать их разработчиком. Поэтому я стал изучать программирование. Уже в студенческие годы я понял, что хочу разрабатывать сайты и web-приложения.
            </m.p>
            <m.p
              className="short-about__text text"
              variants={textAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
              Но также в это время я понял, что имею навык обучать других и хочу делиться своими знаниями, поэтому выбрал направление преподавания.
            </m.p>
            <m.p
              className="short-about__text text"
              variants={textAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
              Считаю что обучение и разработка близки друг другу, так как технологии стремительно развиваются и разработчик всегда должен стремиться преобрести новые навыки. В итоге я совместил приятное с полезным, обучая других, я обучаюсь сам.
            </m.p>
            <m.div
              variants={btnAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Btn
                className='short-about__more'
                mods='btn_dark'
                isLink
                href={'/about'}
                text="Подробнее обо мне"
              />
            </m.div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ShortAbout;
