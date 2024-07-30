const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src',
    mode: 'development',
    output: {
                filename: 'index.js',
                path: path.resolve(__dirname, 'dist')
            },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    {
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }
                ]
            },
            {
                test: /\.(?:js|mjs|cjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({templateContent: '<div id="root"></div>'})
    ]
}