import Row from "../Grid/Row"
import Col from "../Grid/Col"
import Container from "../Grid/Container"
import Section from "../Layout/Section"
import Filter from "./Filter/Filter"
import CasesList from "./CasesList/CasesList"

const Cases = ({ cases }) => {

  return (
    <Section className="cases">
      <Container>
        <h1 className="cases__title h1">Моё <span className="gradient gradient_green">портфолио</span></h1>
        <Row>
          <Col></Col>
          <Col>
            <p className="cases__caption text text_lg">Разрабатываю frontend и делаю качественную верстку</p>
          </Col>
        </Row>
        <Filter
          className="cases__filter"
        />
        <CasesList
          className="cases__list"
        />
      </Container>
    </Section>
  );
}

export default Cases;
