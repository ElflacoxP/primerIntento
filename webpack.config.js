const miniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const cssRule = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
}


const scssRule = {
    test: /\.s[ac]ss$/i,
    use: [{
        loader: miniCssExtractPlugin.loader,
    } , {
        loader: 'css-loader',
    }, {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    [
                        "postcss-preset-env",
                        {
                            options: {
        plugins: function () {
                return [
                    require('precss'),
                    require('autoprefixer')
                ];
            }
        }
                        }
                    ]
                ]
            }
        }
        
    }, {
        loader: 'sass-loader'
    }]
}


const devSvConfig = {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    compress: true
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
        }),
        new miniCssExtractPlugin()
    ],
    module: { rules },
    devServer: devSvConfig,
    devtool: 'source-map'
    }
}