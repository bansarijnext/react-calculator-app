import React, { Component } from "react";
import Result from "./components/Result";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculator();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculator = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: eval(checkResult) || "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="App">
        <Result result={this.state.result} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
