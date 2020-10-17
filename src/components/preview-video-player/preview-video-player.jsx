const PreviewVideoPlayer = (props) => {

  const {src} = props;

  return (
    <video
      src={src}
      width={280}
      height={175}
      autoPlay={true}
      muted={true}
      loop={true}
    />
  );
};

PreviewVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PreviewVideoPlayer;
