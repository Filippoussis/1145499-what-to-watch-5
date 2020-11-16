import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import MainPage from "@components/main-page/main-page";
import SignInScreen from "@components/sign-in-screen/sign-in-screen";
import MyListScreen from "@components/my-list-screen/my-list-screen";
import PlayerScreen from "@components/player-screen/player-screen";
import MoviePage from "@components/movie-page/movie-page";
import MovieAddReview from "@components/movie-add-review/movie-add-review";

import filmsProp from '../../props/films';

const App = (props) => {

  const {title, genre, release, films} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact path="/"
          render={({history}) => (
            <MainPage
              onAvatarClick={() => history.push(`/mylist`)}
              onPlayButtonClick={() => history.push(`/player/:id`)}
              title={title}
              genre={genre}
              release={release}
            />
          )}
        />

        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films} />
        </Route>
        <Route
          exact path="/player/:id"
          render={({history}) => (
            <PlayerScreen onExitButtonClick={() => history.push(`/`)} />
          )}
        />

        <Route
          exact
          path="/films/:id"
          render={({match}) => {
            const {id} = match.params;
            const film = films.find((item) => item.id === id);
            return <MoviePage film={film} />;
          }} />

        <Route exact path="/films/:id/review">
          <MovieAddReview />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  films: filmsProp,
};

export default App;
