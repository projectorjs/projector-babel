# projector-babel

> Run [Babel](https://babeljs.io/) with ease

```js
import * as babel from 'projector-babel';

export async function build() {
  let {code, ast} = await babel.transform({
    code: 'input();',
    options: { /* babel options */ }
  });
}
```
