import Link from "next/link"
import Col from "../../Grid/Col"
import Container from "../../Grid/Container"
import Row from "../../Grid/Row"
import Section from "../../Layout/Section"
import Btn from "../../ui/Btn"
import CasesList from "../CasesList/CasesList"
import SectionTitle from "../../Layout/SectionTitle"

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
