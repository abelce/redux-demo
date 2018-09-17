const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const hostMap = {
    development: '"http://localhost:3001"',
};

const config = {
    mode: isDev() ? "development" : "production",
    devtool: isDev() ? "cheap-module-eval-source-map" : false,
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        hot: true,
        port: 3010,
        contentBase: __dirname + "/dist",
        historyApiFallback: true,
    },
    entry: {
        app: __dirname + "/src/app.tsx",
        po: ["./src/assets/i18ns/zh_CN.po", "./src/assets/i18ns/en_US.po"],
        blog: __dirname + "/src/blog.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: `${process.env.PUBLIC || "/"}`,
        filename: isDev() ? "[name].[hash].js" : "[name].[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\/src\/assets\/script\/noise.js/,
                loader: "expose-loader?noise!exports-loader!imports-loader",
            },
            {
                test: /zh_CN.po$/,
                loader: "expose-loader?zh_CN!json-loader!po-loader",
            },
            {
                test: /en_US.po$/,
                loader: "expose-loader?en_US!json-loader!po-loader",
            },
            {
                test: /axios$/,
                loader: "expose-loader?axios",
            },
            {
                test: /moment$/,
                loader: "expose-loader?moment",
            },
            {
                test: /\.jsx$|\.js$|\.tsx$|\.ts$/,
                include: /src/,
                exclude: [/node_modules/, /src\/assets/],
                loader: "babel-loader",
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|pdf|jpg)$/,
                loader: "url-loader",
                options: {
                    name: "[path][name].[hash].[ext]",
                    limit: 8192,
                    context: "src",
                    fallback: "file-loader",
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]",
                    fallback: "style-loader",
                    use: "css-loader",
                }),
            },
            {
                test: /\.scss$/,
                loader: [
                    "style-loader",
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            localIdentName: "[local]_[hash:base64:5]",
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: function() {
                                return [require("autoprefixer")];
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ["app", "po"],
            template: __dirname + "/src/assets/index.ejs",
        }),
        new HtmlWebpackPlugin({
            chunks: ["blog", "po"],
            filename: "blog.html",
            template: __dirname + "/src/assets/blog.ejs",
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
        }),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV),
            __: function(k) {
                return k;
            },
            _pms_host: hostMap[process.env.NODE_ENV] || "",
        }),
        new webpack.HashedModuleIdsPlugin(),

    ],
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".js", ".tsx", ".ts", ".scss"],
    },
    // optimization: {
    //     minimize: isDev() ? false : true,
    //     nodeEnv: 'production',
    //     runtimeChunk: {
    //         name: entrypoint => `runtime~${entrypoint.name}`
    //     },
    //     minimizer: [
    //         new UglifyWebpackPlugin({
    //             // parallel: true,
    //             sourceMap: false,
    //             // warnings: false,
    //             // nameCache: null,
    //         }),
    //     ],
    // }
};

if (isDev()) {
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin({})
    )
}

module.exports = config;

function isDev() {
    return process.env.NODE_ENV === "development";
}
