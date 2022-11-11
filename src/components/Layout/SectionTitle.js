import { motion as m } from "framer-motion"
import { titleAnimation, btnAnimation } from "../../lib/animation"

const SectionTitle = ({ className, children }) => {
  return (
    <div className={`${className} section__title title-wrapper`}>
      <m.h2
        className="h2"
        variants={titleAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {children}
      </m.h2>
    </div>
  );
}

export default SectionTitle;
