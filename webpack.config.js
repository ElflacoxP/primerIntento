const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const cssRule = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
}


const scssRule = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader','sass-loader'],
}


const jsRule = {    
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/preset-react',
                    {
                        runtime: 'automatic',
                    },
                ],
            ],
        },
}

const rules = [jsRule, cssRule, scssRule]


module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
    entry: './src/index.js',
    output: {
        filename: isProduction
        ? '[name].[contenthash].js'
        : 'main.js',
        path:path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: { rules },
    devServer: {
        open: true,
        port: 3000,
        compress: true
    },
    devtool: 'source-map'
    }
}