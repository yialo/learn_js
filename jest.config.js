'use strict';

module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        ignore: ['./node_modules/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: 'auto',
            },
          ],
        ],
      },
    ],
  },
};
