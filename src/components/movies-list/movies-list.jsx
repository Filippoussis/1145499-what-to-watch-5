import React from "react";
import PropTypes from "prop-types";
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
  films: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
