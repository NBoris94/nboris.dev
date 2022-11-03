import Image from "next/image"
import me from "../../../public/img/me_fs.jpg"
import Container from "../Grid/Container";
import Section from "../Layout/Section";
import Arrow from "../ui/Arrow";

const FirstScreen = () => {
  return (
    <Section className="fs">
      <Container>
        <div className="fs__group">
          <h1 className="fs__title h1">
            <span className="text-row">Сайт-портфолио</span>
            <span className="text-row"><span className="gradient gradient_blue">frontend</span>-разработчика</span>
            <span className="text-row">и <span className="gradient gradient_green">преподавателя</span></span>
          </h1>
          <button className="fs__arrow" type="button" aria-label="Перейти к послежним работам">
            <Arrow
              className='fs__arrow-icon'
            />
          </button>
          <figure className="fs__img">
            <Image
              src={me}
              alt={'Новиков Борис'}
              width={300}
              height={538}
              priority
            />
          </figure>
        </div>
      </Container>
    </Section>
  );
};


export default FirstScreen;
