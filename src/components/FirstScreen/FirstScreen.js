import Image from "next/image";
import me from "../../public/img/me_fs.jpg"

const FirstScreen = () => {
  return (
    <section>
      <h1>
        <span>Сайт-портфолио</span>
        <span><span>frontend</span>-разработчика</span>
        <span>и <span>преподавателя</span></span>
      </h1>
      <button type="button">вниз к работам</button>
      <Image
        src={me}
        alt={'Новиков Борис'}
        width={300}
        height={538}
      />
    </section>
  );
};


export default FirstScreen;
