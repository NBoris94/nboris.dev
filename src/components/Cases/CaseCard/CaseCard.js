import Image from "next/image"
import Link from "next/link"
import Arrow from "../../ui/Arrow"

const CaseCard = ({ name, title, categories, img, shortDescription }) => {

  return (
    <article className="case-card">
      <Link className="case-card__link" href={`/cases/${name}`}>
        <div className="case-card__title">
          <h3
            className="h3"
          >
            {title}
          </h3>
        </div>
        <p
          className="case-card__category"
        >
          {categories[0]}
        </p>
        <Arrow className="case-card__arrow" />
      </Link>
      <figure className="case-card__img">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        />
      </figure>
      <p className="case-card__desc">{shortDescription}</p>
      <div
        className="case-card__line"
      />
    </article>
  );
}

export default CaseCard;
