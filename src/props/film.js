export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  stars: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
}).isRequired;
