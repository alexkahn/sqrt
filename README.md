Square Root
============

This is an example for teaching some fundamental programming concepts
with JavaScript.

The example comes from Abelson and Sussman's Structure and Interretation
of Computer Programs (SICP) original LISP implementation but has been
adapted to JavaScript.

## Installation

You can clone the repository:

```
git clone https://github.com/alexkahn/sqrt.git [optional path]
```

You can also, optionally include it in your local `node_modules` directory
to access it in a natural way from `require` in a Node.js program.

Once the module is downloaded:

```sh
cd /path/to/sqrt
npm install
```

## Usage

```js
var sqrt = require('./sqrt');
// var sqrt = require('sqrt'); if it's in the node_modules dir

sqrt(4);
```

## Testing

If you already have `mocha` installed globally you can just invoke the
command line utility or just use `npm test` to run the test suite.

## Citation
Abelson, Harold, Sussman, Gerald Jay, & Sussman, Julie. (1996). Structure and interpretation of computer programs. MIT Press
