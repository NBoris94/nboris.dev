import Link from "next/link";
import Arrow from "./Arrow";

const Btn = ({ isLink, isOuterLink, href, type, text, mods, className }) => {
  const classes = `${className} btn ${mods}`;

  if (isOuterLink) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
        {text}
        <Arrow
          className="btn__arrow"
        />
      </a>
    )
  }

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
