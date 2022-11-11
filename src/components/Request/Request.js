import { email } from "../../data/contacts"
import Col from "../Grid/Col";
import { motion as m } from "framer-motion"
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Section from "../Layout/Section";
import SectionTitle from "../Layout/SectionTitle";

const textAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 1
    }
  }
}

const Request = () => {
  return (
    <Section className="request">
      <Container>
        <SectionTitle className="request__title">
          Понравились <span className="gradient gradient_green">мои работы</span>?
        </SectionTitle>
        <Row>
          <Col>
            <m.p
              className="request__text text text_lg"
              variants={textAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Тогда вы можете написать мне на почту с вашим предложением
            </m.p>
          </Col>
          <Col>
            <m.a
              className="request__email email"
              href={`mailto:${email}`}
              variants={textAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {email}
            </m.a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Request;
