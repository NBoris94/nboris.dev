import Head from 'next/head'
import Cases from '../../components/Cases/Cases'
import Layout from '../../components/Layout/Layout'
import { getSortedCases } from '../../lib/cases';

export async function getStaticProps() {
  const allCases = getSortedCases();

  return {
    props: {
      allCases,
    },
  };
}

const CasesPage = ({ allCases }) => {

  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Cases cases={allCases} />
      </Layout>
    </>
  )
}

export default CasesPage
