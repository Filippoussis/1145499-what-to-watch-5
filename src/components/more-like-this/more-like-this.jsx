import SmallMovieCard from "@components/small-movie-card/small-movie-card";

import films from "../../mocks/films";

import filmProp from '../../props/film';

const MoreLikeThis = (props) => {

  const {film} = props;
  const similarFourFilms = films.filter(({genre}) => genre === film.genre).slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {similarFourFilms.map((item) => {
          const {id} = item;
          return <SmallMovieCard key={id} film={item} />;
        })}
      </div>
    </section>
  );

};

MoreLikeThis.propTypes = {
  film: filmProp,
};

export default MoreLikeThis;
