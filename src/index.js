import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app";
import films from "./mocks/films";

const Annotation = {
  TITLE: `Sully`,
  GENRE: `Drama`,
  RELEASE: `2016`
};

ReactDOM.render(
    <App
      title={Annotation.TITLE}
      genre={Annotation.GENRE}
      release={Annotation.RELEASE}
      films={films}
    />,
    document.querySelector(`#root`)
);
