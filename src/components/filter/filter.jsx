const GENRES = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const Filter = (props) => {

  const {selectedFilter, onFilterClick} = props;

  const filterItems = GENRES.map((item) => {

    const isActive = selectedFilter === item;
    const classMod = isActive ? `catalog__genres-item--active` : ``;

    return (
      <li
        key={item}
        className={`catalog__genres-item ${classMod}`}
        onClick={() => onFilterClick(item)} >
        <span className="catalog__genres-link">{item}</span>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {filterItems}
    </ul>
  );
};

Filter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default Filter;
