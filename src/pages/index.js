import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import FirstScreen from "../components/FirstScreen/FirstScreen"
import LastCases from "../components/LastCases/LastCases"
import ShortAbout from "../components/ShortAbout/ShortAbout"
import Request from "../components/Request/Request"

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
        <Request />
      </Layout>
    </>
  )
}

export default Home
