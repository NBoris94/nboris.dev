import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import FirstScreen from "../components/FirstScreen/FirstScreen"
import LastCases from "../components/Cases/LastCases/LastCases"
import ShortAbout from "../components/ShortAbout/ShortAbout"

const Home = () => {
  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <FirstScreen />
        <LastCases />
        <ShortAbout />
      </Layout>
    </>
  )
}

export default Home
