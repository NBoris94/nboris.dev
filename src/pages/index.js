import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import FirstScreen from "../components/FirstScreen/FirstScreen";
import LastCases from "../components/LastCases/LastCases";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FirstScreen />
        <LastCases />
        <About />
        <Contacts />
      </Layout>
    </>
  )
}

export default Home
