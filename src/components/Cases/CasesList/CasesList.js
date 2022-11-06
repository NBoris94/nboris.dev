import Link from "next/link";
import Arrow from "../../ui/Arrow";
import CaseCard from "../CaseCard/CaseCard";

const CasesList = ({ className, isLastCases, cases }) => {

  return (
    <ul className={`${className} cases-list`}>
      {cases && cases.map(c => (
        <CaseCard key={c.name} {...c} />
      ))}
    </ul>
  );
}

export default CasesList;
