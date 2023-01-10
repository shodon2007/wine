const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[contenthash].[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3333,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}