import {Link} from "react-router-dom";
import PreviewVideoPlayer from "@components/preview-video-player/preview-video-player";

export default class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter() {
    this.timerId = setTimeout(() => this.setState({
      isActive: true
    }), 1000);
  }

  _handleMouseLeave() {
    clearInterval(this.timerId);
    this.setState({
      isActive: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {film} = this.props;

    const {
      id,
      title,
      preview,
      trailer
    } = film;

    const {isActive} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        {isActive ? (
          <PreviewVideoPlayer src={trailer} />) : (

          <Link to={`/films/:${id}`}>
            <div className="small-movie-card__image">
              <img src={`img/${preview}.jpg`} alt={title} width="280" height="175" />
            </div>
          </Link>
        )}

        <h3 className="small-movie-card__title">
          <Link to={`/films/:${id}`} className="small-movie-card__link">{title}</Link>
        </h3>

      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
};
