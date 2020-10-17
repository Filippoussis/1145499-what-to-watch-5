import SmallMovieCard from "@components/small-movie-card/small-movie-card";

const MoviesList = (props) => {

  const {films, onCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallMovieCard film={film} key={film.title} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    release: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
