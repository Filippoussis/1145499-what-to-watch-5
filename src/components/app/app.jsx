import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const App = (props) => {

  const {title, genre, release} = props;

  return (
    <MainPage title = {title} genre = {genre} release = {release}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
};

export default App;
