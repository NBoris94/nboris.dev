import { Fragment } from "react";

const Filter = ({ className, filter, activeFilters, onToggle }) => {
  return (
    <ul className={`${className} filter`}>
      <li className="filter__item">
        <button
          className={`filter__btn ${activeFilters.length === 0 ? 'gradient gradient_blue' : ''}`}
          type="button"
          onClick={() => onToggle('Все')}
        >
          Все
        </button>
      </li>
      {filter && filter.map(f => (
        <Fragment key={f.id}>
          <li className="filter__item">
            <div className="filter__divider" />
          </li>
          <li className="filter__item">
            <button
              className={`filter__btn ${activeFilters.includes(f.title) ? 'gradient gradient_blue' : ''}`}
              type="button"
              onClick={() => onToggle(f.title)}
            >
              {f.title}
            </button>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default Filter;
