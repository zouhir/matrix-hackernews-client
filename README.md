# preact-digital-rain-hn
> HN Demo app renders 2D canvas in web worker - https://digital-rain-hn.zouhir.codes


## About
This is a personal experiment to render canvas animation off the main thread using Web Workers and `transferControlToOffscreen`

This spec is fairly new and not widely supported yet, more info on (MDN)[https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen]

## Tech Stack & Credits
- This app uses ⚛️ Preact via (preact-cli)[https://github.com/developit/preact-cli]
- (HN API)[https://hacker-news.firebaseio.com] hosted on firebase by some awesome person
- Inspired by a conversation with my awesome work colleague Bo Cupp
- Canvas animation is from this [Codepen](https://codepen.io/P3R0/pen/MwgoKv) by Ebram Marzouk.
