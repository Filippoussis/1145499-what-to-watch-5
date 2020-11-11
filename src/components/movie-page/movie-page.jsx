import {Component} from 'react';
import {Link} from 'react-router-dom';

import MovieNav from '@components/movie-nav/movie-nav';
import MovieOverview from '@components/movie-overview/movie-overview';
import MovieDetails from '@components/movie-details/movie-details';
import MovieReviews from '@components/movie-reviews/movie-reviews';
import MoreLikeThis from '@components/more-like-this/more-like-this';
import PageFooter from "@components/page-footer/page-footer";

import filmProp from '../../props/film';

export default class MoviePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: `Overview`
    };

    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick(tab) {
    this.setState(({tab}));
  }

  render() {

    const {film} = this.props;
    const {title, poster, preview, genre, release} = film;
    const {tab} = this.state;

    const content = {
      'Overview': <MovieOverview film={film} />,
      'Details': <MovieDetails film={film} />,
      'Reviews': <MovieReviews />
    };

    return (
      <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${preview}.jpg`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
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
                <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}.jpg`} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <MovieNav selectedTab={tab} onTabClick={this.onTabClick} />
              {content[tab]}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLikeThis film={film} />
        <PageFooter />
      </div>
      </>
    );
  }
}

MoviePage.propTypes = {
  film: filmProp,
};
