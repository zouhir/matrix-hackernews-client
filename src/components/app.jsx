import { Component } from "preact";

import RainCanvas from "./rain-canvas";
import List from "./list";

export default class App extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
