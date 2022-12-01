import Image from "next/image";
import Col from "../../Grid/Col";
import Row from "../../Grid/Row";

const CaseDesc = ({ logo, content }) => {
  return (
    <Row>
      <Col>
        <div className="case__desc content-html" dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
      <Col>
        <figure className="case__logo" style={{ backgroundColor: logo.bgColor }}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </figure>
      </Col>
    </Row>
  );
}

export default CaseDesc;
