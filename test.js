// @flow
'use strict';

const babel = require('./');

test('.transform()', () => {
  return babel.transform({
    code: 'input(1, 2, 3)',
    options: {
      minified: true,
    },
  }).then(result => {
    expect(result).toMatchSnapshot();
  });
});
