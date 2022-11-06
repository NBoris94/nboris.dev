import Head from 'next/head'
import Image from 'next/image'
import Col from '../components/Grid/Col'
import Container from '../components/Grid/Container'
import Row from '../components/Grid/Row'
import Layout from '../components/Layout/Layout'
import Section from '../components/Layout/Section'
import me from '../../public/img/me_about_page.jpg'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Новиков Борис - фриланс front-end разработчик и преподаватель</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section className="about">
          <Container>
            <h1 className="about__title section__title h1">Обо <span className='gradient gradient_pink'>мне</span></h1>
            <Row>
              <Col>
                <figure className="about__img">
                  <Image
                    src={me}
                    alt={'Изображение Новикова Бориса'}
                    width={675}
                    height={922}
                  />
                </figure>
              </Col>
              <Col>
                <div className="about__desc">
                  <p className="about__text text">Привет, меня зовут Новиков Борис. Этот сайт я решил сделать для того, чтобы показать свои работы и навыки.</p>
                  <p className="about__text text">Основная моя деятельность - это преподавание в вузе. Но все остальное время я посвящаю семье, разработке и капельку компьютерным играм.</p>
                  <p className="about__text text">С детства я увлекался компьютерными играми и хотел стать их разработчиком. Поэтому я стал изучать программирование. Уже в студенческие годы я понял, что хочу разрабатывать сайты и web-приложения.</p>
                  <p className="about__text text">Но также в это время я понял, что имею навык обучать других и хочу делиться своими знаниями, поэтому выбрал направление преподавания.</p>
                  <p className="about__text text">Считаю что обучение и разработка близки друг другу, так как технологии стремительно развиваются и разработчик всегда должен стремиться приобрести новые навыки. В итоге я совместил приятное с полезным, обучая других, я обучаюсь сам.</p>
                  <p className="about__text text">Путь разработчика я начал с изучения актуальных технологий. В вузе нам преподавали в основном Си-подобные языки, и поэтому мой выбор сразу пал на C#. Так что начал я с backend’а. С другом мы написали свой движок для интернет-магазина и в процессе я понял, что мне интереснее работать с интерфейсом, а не взаимодействовать с БД. Поэтому переключился на frontend.</p>
                  <p className="about__text text">Сейчас в основном занимаюсь версткой и состою в маленькой группе, с которой мы разрабатываем сайты.</p>
                  <p className="about__text text">Вот ссылочки на <a className="gradient gradient_pink" href="https://adaptable-flavor-c60.notion.site/5ff3b4670f4941d683bc3f7d7e63e929" target="_blank" rel="nofollow noopener">дизайнера</a> и <a className="gradient gradient_blue" href="https://llinh9ra.ru/" target="_blank" rel="nofollow noopener">backend-разработчика</a>.</p>
                </div>
                <div className="about__skills">
                  <h4 className="about__h4 h4">Основные навыки</h4>
                  <p className="about__text text">HTML, CSS, JavaScript, React</p>
                </div>
                <div className="about__skills">
                  <h4 className="about__h4 h4">Дополнительные навыки</h4>
                  <p className="about__text text">SCSS, TypeScript, Redux, NextJS, C#, ASP.NET, Gulp, Webpack</p>
                </div>
                <div className="about__skills">
                  <h4 className="about__h4 h4">Что хотелось бы изучить</h4>
                  <p className="about__text text">Svelte, Solid, Island architecture, ThreeJS</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default AboutPage
