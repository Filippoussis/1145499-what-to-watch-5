import {Link} from "react-router-dom";
import PreviewVideoPlayer from "@components/preview-video-player/preview-video-player";

import {withRouter} from 'react-router-dom';

import filmProp from '../../props/film';

class SmallMovieCard extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isActive: false
    };

    this._handleMouseClick = this._handleMouseClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter() {
    const {time} = this.props;

    this.timerId = setTimeout(() => this.setState({
      isActive: true
    }), time);
  }

  _handleMouseLeave() {
    clearInterval(this.timerId);
    this.setState({
      isActive: false
    });
  }

  _handleMouseClick() {
    const {id} = this.props.film;
    const {history} = this.props;
    history.push(`/films/${id}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {id, title, preview, trailer} = this.props.film;
    const {isActive} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleMouseClick}
      >
        {isActive ? (
          <PreviewVideoPlayer src={trailer} />) : (
          <div className="small-movie-card__image">
            <img src={`img/${preview}.jpg`} alt={title} width="280" height="175" />
          </div>
        )}
        <h3 className="small-movie-card__title">
          <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.defaultProps = {
  time: 1000
};

SmallMovieCard.propTypes = {
  film: filmProp,
  time: PropTypes.number,
  history: PropTypes.object,
};

export default withRouter(SmallMovieCard);
