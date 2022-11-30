const SectionTitle = ({ className, children }) => {
  return (
    <div className={`${className} section__title title-wrapper`}>
      <h2
        className="h2"
      >
        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;
