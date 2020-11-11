import SmallMovieCard from "@components/small-movie-card/small-movie-card";

import filmsProp from '../../props/films';

const MoviesList = (props) => {

  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        const {id} = film;
        return <SmallMovieCard key={id} film={film} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: filmsProp
};

export default MoviesList;
