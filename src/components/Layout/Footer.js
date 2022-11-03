import Container from "../Grid/Container";
import Social from "../Social/Social";
import Arrow from "../ui/Arrow";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__group">
          <Social className="footer__social" />
          <p className="footer__copyright">© Новиков Борис. Все права защищены.</p>
          <button className="footer__up" type="button" aria-label="Вернуться наверх">
            <Arrow
              className="footer__arrow"
            />
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
