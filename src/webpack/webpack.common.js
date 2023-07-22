const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')


//module rules
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

const jsRule = {    
    test: /\.(js|jsx)$/,
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

const tsRule ={ 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
}

const jpgRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource'
}

const svgRule = {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline'
}

const rules = [jsRule, tsRule, cssRule, scssRule, jpgRule, svgRule]


//Module
module.exports = {
    entry: path.resolve(__dirname,'../index.js'),
    output: {
        filename: isProduction
        ? '[name].[contenthash].js'
        : 'main.js',
        path:path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html'
        }),
        new miniCssExtractPlugin()
    ],
    module: { rules },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],    
    }
}
