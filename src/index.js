import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Annotation = {
  TITLE: `Blade Runner 2049`,
  GENRE: `Fantastic`,
  RELEASE: `2017`
};

ReactDOM.render(
    <App title={Annotation.TITLE} genre={Annotation.GENRE} release={Annotation.RELEASE} />,
    document.querySelector(`#root`)
);
