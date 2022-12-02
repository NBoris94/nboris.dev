const Social = ({ className }) => {
  return (
    <ul className={`${className} social`}>
      <li className="social__item">
        <a className="social__link social__link_blue" href="https://vk.com/n_boris" target="_blank" rel="nofollow noopener noreferrer">vkontakte</a>
      </li>
      <li className="social__item">
        <a className="social__link social__link_green" href="https://github.com/NBoris94/" target="_blank" rel="nofollow noopener noreferrer">github</a>
      </li>
      <li className="social__item">
        <a className="social__link social__link_pink" href="https://t.me/NBoris" target="_blank" rel="nofollow noopener noreferrer">telegram</a>
      </li>
    </ul>
  );
}

export default Social;
