const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
mode: 'development',
devtool: 'cheap-module-source-map',
devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    compress: true
},
plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
    'process.env.name': JSON.stringify('LeoDev'),
    }),
],
}