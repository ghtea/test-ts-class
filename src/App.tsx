import * as React from "react";
import "./styles.css";

type PropsApp = {};
type StateApp = {
  time: Date;
};

class App extends React.Component<PropsApp, StateApp> {
  state: StateApp = {
    // optional second annotation for better type inference
    time: new Date()
  };

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    this.setState({
      time: new Date()
    });
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  // render will know everything!
  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}

export default App;
