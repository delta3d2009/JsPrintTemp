var path = require('path');

module.exports = {
    entry: './src/js/mDinit.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mDrag.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}