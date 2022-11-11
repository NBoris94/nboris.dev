import Link from "next/link";
import { motion as m } from "framer-motion";
import Col from "../../Grid/Col";
import Container from "../../Grid/Container";
import Row from "../../Grid/Row";
import Section from "../../Layout/Section";
import Btn from "../../ui/Btn";
import CasesList from "../CasesList/CasesList";
import { titleAnimation, btnAnimation } from "../../../lib/animation";
import SectionTitle from "../../Layout/SectionTitle";

const LastCases = ({ cases }) => {
  return (
    <Section className='last-cases'>
      <Container>
        <SectionTitle className="last-cases__title">
          Последние <span className="gradient gradient_blue">работы</span>
        </SectionTitle>
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
