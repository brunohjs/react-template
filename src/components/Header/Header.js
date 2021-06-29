import React from "react";
import {
  Nav
} from "react-bootstrap";
import "./Header.scss";
import "./m.Header.scss";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  scroll(sectionId, event) {}
  
  componentDidMount() {}

  render() {
    return (
      <Nav></Nav>
    );
  }
}
