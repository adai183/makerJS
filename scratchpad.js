var makerjs = require('makerjs');


var eye_r = 10;

var scale = function (x) {
  return x * 2
}

var head_r = scale(90)

this.paths = {
    head: new makerjs.paths.Circle([0, 0], head_r),
    eye: new makerjs.paths.Circle([25, 25], eye_r),
    mouth: new makerjs.paths.Arc([0, 0], 50, 225, 315),
    wink: new makerjs.paths.Line([-35, 20], [-15, 20])
};
