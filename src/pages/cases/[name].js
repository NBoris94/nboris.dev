import Head from "next/head"
import Layout from "../../components/Layout/Layout"
import Container from "../../components/Grid/Container";
import Section from "../../components/Layout/Section";
import { getAllCasesNames, getCaseByName } from "../../lib/cases";
import Image from "next/image";
import CaseInfo from "../../components/Cases/Case/CaseInfo";
import CaseDesc from "../../components/Cases/Case/CaseDesc";
import CaseImages from "../../components/Cases/Case/CaseImages";

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
  const { title, coverImg, info, logo, imagesColor, images, contentHtml } = caseData;

  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section className="case">
          <Container>
            <h1 className="case__title section__title h1">{title.text} <span className="gradient" style={{ backgroundImage: title.color }}>{title.primary}</span></h1>
            <figure className="case__img">
              <Image
                src={coverImg.src}
                alt={coverImg.alt}
                width={coverImg.width}
                height={coverImg.height}
                priority
                quality={85}
              />
            </figure>
            <CaseInfo {...info} />
            <CaseDesc logo={logo} content={contentHtml} />
          </Container>
          <CaseImages color={imagesColor} images={images} />
        </Section>
      </Layout>
    </>
  );
}

export default CasePage;
