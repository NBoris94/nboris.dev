import Link from "next/link";
import { motion as m } from "framer-motion";
import Col from "../../Grid/Col";
import Container from "../../Grid/Container";
import Row from "../../Grid/Row";
import Section from "../../Layout/Section";
import Btn from "../../ui/Btn";
import CasesList from "../CasesList/CasesList";

const titleAnimation = {
  hidden: {
    y: "100%"
  },
  show: {
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 0.3
    }
  }
}

const btnAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.3
    }
  }
}

const LastCases = ({ cases }) => {
  return (
    <Section className='last-cases'>
      <Container>
        <m.div className="last-cases__title section__title title-wrapper">
          <m.h2
            className="h2"
            variants={titleAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{  once: true }}
          >Последние <span className="gradient gradient_blue">работы</span></m.h2>
        </m.div>
        <CasesList
          className="last-cases__cards"
          isLastCases
          cases={cases}
        />
        <Row>
          <Col></Col>
          <Col>
            <m.div
              variants={btnAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Btn
                className="last-cases__more"
                isLink
                href="/cases"
                text="Все работы"
              />
            </m.div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default LastCases;
