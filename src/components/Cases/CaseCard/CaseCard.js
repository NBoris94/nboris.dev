import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import Arrow from "../../ui/Arrow"

const lineAnimation = {
  hidden: {
    scaleX: 0
  },
  show: {
    scaleX: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 0.3
    }
  }
}

const titleAnimation = {
  hidden: {
    y: "100%"
  },
  show: {
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 1.1
    }
  }
}

const categoryAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 1.9
    }
  }
}

const CaseCard = ({ name, title, categories, img, shortDescription }) => {

  return (
    <article className="case-card">
      <Link className="case-card__link" href={`/cases/${name}`}>
        <div className="case-card__title">
          <motion.h3
            className="h3"
            variants={titleAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p
          className="case-card__category"
          variants={categoryAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories[0]}
        </motion.p>
        <Arrow className="case-card__arrow" />
      </Link>
      <figure className="case-card__img">
        {/* <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        /> */}
      </figure>
      <p className="case-card__desc">{shortDescription}</p>
      <motion.div
        className="case-card__line"
        variants={lineAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />
    </article>
  );
}

export default CaseCard;
