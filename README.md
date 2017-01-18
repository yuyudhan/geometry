# Geometry

## Usage

```sh
npm i geometry --saves

```

```js

var lines = require('geometry').lines;


// check angle between two lines

// check which side of the line

var sideOfLine = lines.checkSide({
  x: 2,
  y: 2
}, {
  x: 3,
  y: 3
}, {
  x: 7,
  y: 5
});

```

## Testing

Module uses mocha for testing

Whole geometry module can be tested using the following command from the project root

```sh

mocha --recursive specs/

```
