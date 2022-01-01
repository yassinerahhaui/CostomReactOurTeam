import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   welcome: "Hello From React!",
    //   number: 0,
    // };
    // this.increment = this.increment.bind(this);
  }
  // increment() {
  //   this.setState((state) => {
  //     return { number: this.state.number + 1 };
  //   });
  // }

  render() {
    return (
      <div>
        {/* <h1>{this.state.welcome}</h1> */}
        {/* <h1>{this.state.number}</h1>
        <button onClick={this.increment}>Increment</button> */}
        <Counter />
      </div>
    );
  }
}
export default App;
