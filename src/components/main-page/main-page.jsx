import {Component} from "react";
import {connect} from "react-redux";

import {filter} from '../../store/actions'

import MoviesList from "@components/movies-list/movies-list";
import PageFooter from "@components/page-footer/page-footer";
import Filter from "@components/filter/filter";

import filmsProp from '../../props/films';

class MainPage extends Component {

  constructor() {
    super();

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onFilterClick(filter) {
    this.props.onSetFilter(filter);
  }

  render() {

    const {title, genre, release, onAvatarClick, onPlayButtonClick, films} = this.props;

    return (
      <>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/sully-wallpaper.jpg" alt="Sully" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar" onClick={onAvatarClick}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/sully-poster.jpg" alt="Sully poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{release}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section >

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <Filter selectedFilter={genre} onFilterClick={this.onFilterClick} />

            <MoviesList films={films} />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <PageFooter />
        </div>

      </>
    );
  };
};

MainPage.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  films: filmsProp,
};

const mapStateToProps = (state) => ({
  films: state.genre === `All genres` ? state.films : state.films.filter((item) => item.genre === state.genre),
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilter(nameFilter) {
    dispatch(filter(nameFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
