import filmProp from '../../props/film';

const MovieOverview = (props) => {

  const {about, director, stars} = props.film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">8,9</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{about}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {stars.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  film: filmProp,
};

export default MovieOverview;
