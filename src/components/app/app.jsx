import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "@components/main-page/main-page";
import SignInScreen from "@components/sign-in-screen/sign-in-screen";
import MyListScreen from "@components/my-list-screen/my-list-screen";
import PlayerScreen from "@components/player-screen/player-screen";
import MoviePage from "@components/movie-page/movie-page";
import MovieAddReview from "@components/movie-add-review/movie-add-review";

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
              films={films}
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

        <Route exact path="/films/:id/review">
          <MovieAddReview />
        </Route>

        <Route exact path="/films/:id">
          <MoviePage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default App;
