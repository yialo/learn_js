'use strict';

function random(min, max) {
  const delta = Math.abs(max - min);
  return min + delta * Math.random();
}

alert(random(8, 14));
