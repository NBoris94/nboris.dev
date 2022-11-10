import Link from "next/link";
import Col from "../../Grid/Col";
import Container from "../../Grid/Container";
import Row from "../../Grid/Row";
import Section from "../../Layout/Section";
import Arrow from "../../ui/Arrow";
import Btn from "../../ui/Btn";
import CasesList from "../CasesList/CasesList";

const LastCases = ({ cases }) => {
  return (
    <Section className='last-cases'>
      <Container>
        <h2 className="last-cases__title section__title h2">Последние <span className="gradient gradient_blue">работы</span></h2>
        <CasesList
          className="last-cases__cards"
          isLastCases
          cases={cases}
        />
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
