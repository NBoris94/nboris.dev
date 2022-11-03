const Arrow = ({ className }) => {
  return (
    <span
      className={`arrow ${className}`}
    >
      <svg width="12" height="60" viewBox="0 0 12 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.01099" width="60" height="1" transform="rotate(90 6.01099 0)" />
        <rect x="11.011" y="51.34" width="10" height="1" transform="rotate(120 11.011 51.34)" />
        <rect x="0.865967" y="50.84" width="10" height="1" transform="rotate(60 0.865967 50.84)" />
      </svg>
    </span>
  );
}

export default Arrow;
