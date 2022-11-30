import { email } from "../../data/contacts"
import Col from "../Grid/Col"
import Container from "../Grid/Container"
import Row from "../Grid/Row"
import Section from "../Layout/Section"
import SectionTitle from "../Layout/SectionTitle"

const Request = () => {
  return (
    <Section className="request">
      <Container>
        <SectionTitle className="request__title">
          Понравились <span className="gradient gradient_green">мои работы</span>?
        </SectionTitle>
        <Row>
          <Col>
            <p
              className="request__text text text_lg"
            >
              Тогда вы можете написать мне на почту с вашим предложением
            </p>
          </Col>
          <Col>
            <a
              className="request__email email"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Request;
