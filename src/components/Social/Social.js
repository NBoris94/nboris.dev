import { socials } from '../../data/contacts.js'

const Social = ({ className }) => {
  return (
    <ul className={`${className} social`}>
      {socials.map(s => (
        <li className="social__item" key={s.id}>
          <a className="social__link" href={s.link}>{s.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
