var webpack = require('webpack')

module.exports = {
    entry: __dirname + '/build/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    resolve: {

    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         sourceMap: true
    //     })
    // ],
    module: {
        loaders: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}