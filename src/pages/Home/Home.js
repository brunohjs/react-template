import React from "react";
import "./Home.scss";
import Template from "../../components/Template/Template";

export default class Home extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="main">
        <Template />
      </div>
    )
  }
}