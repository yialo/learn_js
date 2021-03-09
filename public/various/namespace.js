'use strict';

module.exports = function namespace(str, value) {
  const propArray = str.split('.');
  const { length } = propArray;

  return propArray.reduceRight((output, prop, i, arr) => {
    const isDeepest = i === arr.length - 1;

    return {
      [prop]: isDeepest ? value : { ...output },
    };
  }, value);
}
