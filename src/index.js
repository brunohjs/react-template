import React from "react";
import ReactDOM from "react-dom";
import path from "path";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";

if (process.env.NODE_ENV == "production") {
  require("dotenv").config();
} else {
  require("dotenv").config({
    path: path.resolve(process.cwd(), ".env.development")
  })
}

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
