const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const hostMap = {
    development: '"http://localhost:3001"',
}

module.exports = {
    mode: isDev() ? 'development' : 'production',
    devtool: isDev() ? "cheap-module-eval-source-map" : 'nosources-source-map',
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        hot: true,
        port: 3010,
        contentBase: __dirname + '/dist',
        historyApiFallback: true
    },
    entry: {
        app: __dirname + '/src/app.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: `${process.env.PUBLIC || '/'}`,
        filename: isDev() ? "[name].[hash].js" : "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$|\.js$|\.tsx$|\.ts$/,
                include: /src/,
                exclude: [
                    /node_modules/,
                    /src\/assets/,
                ],
                loader: 'babel-loader',
                query: {
                    presets: ["env", "react", "stage-0"],
                    plugins: [
                        ["import", {
                            libraryName: "antd",
                            style: "css"
                        }],
                        ["transform-runtime"],
                        'transform-decorators-legacy',
                    ]
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|pdf|jpg)$/,
                loader: 'url-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                    limit: 8192,
                    context: 'src',
                    fallback: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         importLoaders: 1,
                    //         minimize: !isDev()
                    //     }
                    // },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: function () {
                                return [require('autoprefixer')];
                            },
                        },
                    },
                    'sass-loader'
                ],

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            // chunksSortMode: function (a, b) {
            //     return a.id < b.id ? 1 : -1
            // },
            // // filename: 'index.[hash].html',
            template: __dirname + '/src/assets/index.ejs',

        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.APP_ENV),
            __: function (k) {
                return k;
            },
            _pms_host: hostMap[process.env.APP_ENV] || ''
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.tsx', '.ts', '.scss'],
    }
}

function isDev() {
    return process.env.APP_ENV === 'development'
}

function scssRules({global}) {
    return [
        'style-loader',
        {
            loader: 'css-loader',
            options: global ? {
                importLoaders: 1,
                minimize: !isDev()
            } : {
                modules: true,
                minimize: !isDev(),
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: function () {
                    return [require('autoprefixer')];
                },
            },
        },
        'sass-loader'
    ]
}