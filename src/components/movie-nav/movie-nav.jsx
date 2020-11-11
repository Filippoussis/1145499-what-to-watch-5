const TABS = [`Overview`, `Details`, `Reviews`];

const MovieNav = (props) => {

  const {selectedTab, onTabClick} = props;

  const navItems = TABS.map((item) => {

    const isActive = selectedTab === item;
    const classMod = isActive ? `movie-nav__item--active` : ``;

    return (
      <li
        key={item}
        className={`movie-nav__item ${classMod}`}
        onClick={() => onTabClick(item)} >
        <span className="movie-nav__link">{item}</span>
      </li>
    );
  });

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navItems}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  selectedTab: PropTypes.oneOf(TABS).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MovieNav;
