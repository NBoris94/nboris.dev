import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import FirstScreen from "../components/FirstScreen/FirstScreen"
import LastCases from "../components/Cases/LastCases/LastCases"
import ShortAbout from "../components/ShortAbout/ShortAbout"
import { getSortedCases } from '../lib/cases'

export async function getStaticProps() {
  const allCases = getSortedCases();

  return {
    props: {
      last4Cases: allCases.slice(0, 3),
    },
  };
}

const Home = ({ last4Cases }) => {
  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <FirstScreen />
        <LastCases cases={last4Cases} />
        <ShortAbout />
      </Layout>
    </>
  )
}

export default Home
