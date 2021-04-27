const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, '_test.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });