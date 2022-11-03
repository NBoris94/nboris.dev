import { email } from "../../data/contacts"
import Col from "../Grid/Col";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Section from "../Layout/Section";

const Request = () => {
  return (
    <Section className="request">
      <Container>
        <h2 className="request__title section__title h2">Понравились <span className="gradient gradient_green">мои работы</span>?</h2>
        <Row>
          <Col>
            <p className="request__text text text_lg">Тогда вы можете написать мне на почту с вашим предложением</p>
          </Col>
          <Col>
            <a className="request__email email" href={`mailto:${email}`}>{email}</a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Request;
