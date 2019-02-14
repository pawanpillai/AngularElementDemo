const merge = require('concat');

const files = [
    './dist/myapp/runtime.js',
    './dist/myapp/polyfills.js',
    './dist/myapp/scripts.js',
    './dist/myapp/main.js'
]

merge(files, './dist/myapp/myapp.js');
console.log('file generated');