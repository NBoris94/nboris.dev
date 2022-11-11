import Link from "next/link"
import CaseCard from "../CaseCard/CaseCard"

const CasesList = ({ className, isLastCases, cases }) => {

  return (
    <ul
      className={`${className} cases-list`}
    >
      {cases && cases.map(c => (
        <li key={c.name}>
          <CaseCard {...c} />
        </li>
      ))}
      {cases && cases.map(c => (
        <li key={c.name}>
          <CaseCard {...c} />
        </li>
      ))}
    </ul>
  );
}

export default CasesList;
