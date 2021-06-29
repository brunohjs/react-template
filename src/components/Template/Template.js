import React from "react";
import {
  Button
} from "react-bootstrap";
import "./Template.scss";
import "./m.Template.scss";


export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    }
  }
  
  componentDidMount() {}

  render() {
    return (
      <div>
        Template de componente
        <Button>
          Teste
        </Button>
      </div>
    );
  }
}
