'use strict';

/**
 * @see {@link https://learn.javascript.ru/task/create-array}
 */

exports.createArray = () => {
  const styles = ['Джаз', 'Блюз'];
  styles.push('Рок-н-ролл');
  styles[1] = 'Классика';
  console.log(styles.shift());
  styles.unshift('Рэп', 'Регги');
  return styles;
};
