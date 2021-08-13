import { Component } from "preact";

import RainCanvasWorker from "../workers/rain-canvas.js?worker";

const rcWorker = new RainCanvasWorker();

class RainCanvas extends Component {
  componentDidMount() {
    let canvas = this.base;
    let offscreenCanvas = canvas.transferControlToOffscreen();
    rcWorker.postMessage(
      {
        action: "draw",
        height: window.innerHeight,
        width: window.innerWidth,
        canvas: offscreenCanvas
      },
      [offscreenCanvas]
    );
  }
  render() {
    return <canvas />;
  }
}

export default RainCanvas;
