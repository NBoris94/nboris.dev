import { getAllCasesNames, getCaseByName } from "../../lib/cases";

export async function getStaticPaths() {
  const paths = getAllCasesNames();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseData = await getCaseByName(params.name);

  return {
    props: {
      caseData,
    },
  };
}

const CasePage = ({ caseData }) => {
  console.log(caseData);

  return (
    <div>

    </div>
  );
}

export default CasePage;
