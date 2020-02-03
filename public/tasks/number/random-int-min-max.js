'use strict';

function randomInteger(min, max) {
  const rand = Math.random();
  const scaledRandomInt = Math.floor(rand * (max - min + 1));
  return min + scaledRandomInt;
}

alert(randomInteger(1, 3));
