const path = require('path');
const htmlWebpack = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotEnv = require('dotenv-webpack');
const webpack = require("webpack");
const cssExtract = require('mini-css-extract-plugin');



module.exports = {
    entry: [
        path.join(__dirname, '/index.js')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                }
            }
        }
    },
    module: {
        // Module Rules Point
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".jsx", ".js", ".json"]
                },
                use: [
                    { loader: "babel-loader" },
                    { loader: "eslint-loader" }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                        }
                    }
                ]
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    cssExtract.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ],
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new htmlWebpack({
            template: path.join(__dirname, '/src/template/index.html'),
            filename: './index.html',
            favicon: './src/template/favicon.png'
        }),
        new dotEnv({ path: './.env.development' }),
        new CleanWebpackPlugin(),
        new cssExtract({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ]
}