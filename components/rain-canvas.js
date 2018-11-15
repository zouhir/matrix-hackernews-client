import { Component, h } from "preact";

import RainCanvasWorker from "worker-loader!../workers/rain-canvas";

const rcWorker = new RainCanvasWorker();

class RainCanvas {
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
