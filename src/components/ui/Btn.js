import Link from "next/link";
import Arrow from "./Arrow";

const Btn = ({ isLink, href, type, text, mods, className }) => {
  const classes = `${className} btn ${mods}`;

  if (isLink) {
    return (
      <Link
        className={classes}
        href={href}
      >
        {text}
        <Arrow
          className="btn__arrow"
        />
      </Link>
    )
  }

  return (
    <button
      className={classes}
      type={type}
    >
      {text}
      <Arrow
        className="btn__arrow"
      />
    </button>
  );
}

export default Btn;
