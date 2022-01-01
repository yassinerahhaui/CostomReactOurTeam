import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => {
      return {
        number: this.state.number + 1,
      };
    });
  }
  decrement() {
    this.setState((state) => {
      return { number: this.state.number - 1 };
    });
  }
  reset() {
    this.setState((state) => {
      return { number: (this.state.number = 0) };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
