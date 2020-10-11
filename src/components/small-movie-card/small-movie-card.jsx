import React, {PureComponent} from "react";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter() {
    this.setState((state) => ({
      isActive: !state.isActive
    }));
  }

  _handleMouseLeave() {
    this.setState((state) => ({
      isActive: !state.isActive
    }));
  }

  render() {
    const {film, onCardClick} = this.props;

    const {
      title,
      preview,
      trailer
    } = film;

    const {isActive} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={onCardClick}
      >
        {isActive ? <ReactPlayer url={trailer} width={280} height={175} muted={true} loop={true}
          config={{
            youtube: {
              playerVars: {autoplay: 1}
            },
          }}/> :
          <>
            <div className="small-movie-card__image">
              <img src={`img/${preview}.jpg`} alt={title} width="280" height="175" />
            </div>
          </>}
        <h3 className="small-movie-card__title">
          <Link to="/films/:id" className="small-movie-card__link">{title}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
