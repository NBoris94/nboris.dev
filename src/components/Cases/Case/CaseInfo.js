import Btn from "../../ui/Btn";

const CaseInfo = ({ client, year, role, link }) => {
  return (
    <div className="case__information case-info">
      <ul className="case-info__list">
        <li>
          <h4 className="case-info__title">Клиент</h4>
          <p className="case-info__text">{client}</p>
        </li>
        <li>
          <h4 className="case-info__title">Роль</h4>
          <p className="case-info__text">{role}</p>
        </li>
        <li>
          <h4 className="case-info__title">Год</h4>
          <p className="case-info__text">{year}</p>
        </li>
        <li>
          <h4 className="case-info__title">Адрес сайта</h4>
          <p className="case-info__text">
            <Btn
              className='case-info__btn'
              mods='btn_dark'
              isOuterLink
              href={link}
              text="Перейти"
            />
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CaseInfo;
