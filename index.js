import "./style";
import { Component } from "preact";

import RainCanvas from "./components/rain-canvas";
import List from "./components/list";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <RainCanvas />
        <List />
        <a
          class="credit"
          href="https://codepen.io/P3R0/pen/MwgoKv"
          rel="noopener"
          target="_blank"
        >
          Rain canvas credit: [codepen]
        </a>
      </div>
    );
  }
}
