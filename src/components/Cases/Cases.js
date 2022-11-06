import { useState, useEffect } from "react"
import Row from "../Grid/Row"
import Col from "../Grid/Col"
import Container from "../Grid/Container"
import Section from "../Layout/Section"
import Filter from "./Filter/Filter"
import CasesList from "./CasesList/CasesList"
import { filter } from "../../data/filter"

const Cases = ({ cases }) => {
  const [activeFilters, setActiveFilters] = useState([])
  const [filteredCases, setFilteredCases] = useState([])

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredCases(cases);
    }
    else {
      const temp = []
      activeFilters.map(activeFilter => {
        cases.map(c => {
          if (c.categories.includes(activeFilter) && !temp.includes(c)) {
            temp.push(c)
          }
        })
      })
      setFilteredCases(temp.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      }))
    }
  }, [activeFilters])

  const handleToggleActiveFilter = (title) => {
    if (title === 'Все') {
      setActiveFilters([])
    }
    else {
      if (activeFilters.includes(title)) {
        setActiveFilters(prev => prev.filter(f => f !== title));
      }
      else {
        setActiveFilters(prev => [...prev, title])
      }
    }
  }

  console.log(filteredCases);

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
          filter={filter}
          activeFilters={activeFilters}
          onToggle={handleToggleActiveFilter}
        />
        <CasesList
          className="cases__list"
          cases={filteredCases}
        />
      </Container>
    </Section>
  );
}

export default Cases;
