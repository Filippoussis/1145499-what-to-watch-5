import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "components/main-page/main-page";
import SignInScreen from "components/sign-in-screen/sign-in-screen";
import MyListScreen from "components/my-list-screen/my-list-screen";
import PlayerScreen from "components/player-screen/player-screen";
import MoviePage from "components/movie-page/movie-page";
import MovieAddReview from "components/movie-add-review/movie-add-review";

const App = (props) => {

  const {title, genre, release} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage title = {title} genre = {genre} release = {release}/>
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact component={PlayerScreen} path="/player/:id?"></Route>
        <Route exact component={MovieAddReview} path="/films/review"></Route>
        <Route exact component={MoviePage} path="/films/:id?"></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
};

export default App;
