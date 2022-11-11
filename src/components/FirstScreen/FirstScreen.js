import Image from "next/image"
import { motion as m } from "framer-motion"
import me from "../../../public/img/me_fs.jpg"
import Container from "../Grid/Container"
import Section from "../Layout/Section"
import Arrow from "../ui/Arrow"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      ease: 'easeOut'
    }
  }
}

const item = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
}

const imageAnimation = {
  hidden: { x: 20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.9
    }
  }
}

const btnAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 1.9
    }
  }
}

const arrowAnimation = {
  hidden: { y: '-110%' },
  show: {
    y: '110%',
    transition: {
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
      // repeatType: 'repeat',
      delay: 2.5
    }
  }
}

const FirstScreen = () => {
  return (
    <Section className="fs">
      <Container>
        <div className="fs__group">
          <m.h1
            className="fs__title h1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <span className="text-row">
              <m.span variants={item}>Сайт-портфолио</m.span>
            </span>
            <span className="text-row">
              <m.span variants={item}><span className="gradient gradient_blue">frontend</span>-разработчика</m.span>
            </span>
            <span className="text-row">
              <m.span variants={item}>и <span className="gradient gradient_green">преподавателя</span></m.span>
            </span>
          </m.h1>
          <m.button
            className="fs__arrow"
            type="button"
            aria-label="Перейти к послежним работам"
            variants={btnAnimation}
            initial="hidden"
            animate="show"
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <m.span
                variants={arrowAnimation}
                initial="hidden"
                animate="show"
                style={{ display: 'block' }}
              >
                <Arrow
                  className='fs__arrow-icon'
                />
              </m.span>
            </span>
          </m.button>
          <m.figure
            className="fs__img"
            variants={imageAnimation}
            initial="hidden"
            animate="show"
          >
            <Image
              src={me}
              alt={'Новиков Борис'}
              width={366}
              height={656}
              priority
            />
          </m.figure>
        </div>
      </Container>
    </Section>
  );
};


export default FirstScreen;
