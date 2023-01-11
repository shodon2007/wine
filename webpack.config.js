const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './script/script.js',
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
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img/exit.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/burger.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/wine.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/history-img__big.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/history-img__sleft.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/history-img__sright.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/sign.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/sign2.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
            ]
        }),
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