let canvas;
let ctx;

// Thanks and all credit to Ebram Marzouk for the canvas art on codepen.
// https://codepen.io/P3R0/pen/MwgoKv
// Codepen author profile: https://codepen.io/P3R0/
function draw() {
  //chinese characters - taken from the unicode charset
  let chinese =
    "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
  //converting the string into an array of single characters
  chinese = chinese.split("");

  let font_size = 10;
  let columns = canvas.width / font_size; //number of columns for the rain
  //an array of drops - one per column
  let drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for (let x = 0; x < columns; x++) drops[x] = 1;

  //drawing the characters
  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (let i = 0; i < drops.length; i++) {
      //a random chinese character to print
      let text = chinese[Math.floor(Math.random() * chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

self.onmessage = function(ev) {
  if (ev.data.action === "draw") {
    console.log("wirker");
    let height = ev.data.height;
    let width = ev.data.width;
    canvas = ev.data.canvas;
    canvas.height = height;
    canvas.width = width;
    ctx = canvas.getContext("2d");
    draw();
  }
};
