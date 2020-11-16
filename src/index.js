import {createStore} from "redux";
import {Provider} from "react-redux";

import {reducer} from "./store/reducer";

import App from "@components/app/app";

import films from "./mocks/films";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const Annotation = {
  TITLE: `Sully`,
  GENRE: `Drama`,
  RELEASE: `2016`
};

ReactDOM.render(
    <Provider store={store}>
      <App
        title={Annotation.TITLE}
        genre={Annotation.GENRE}
        release={Annotation.RELEASE}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
