const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require('fs');

const loading = {
  html: fs.readFileSync(path.join(__dirname, './src/assets/loading/index.html')),
  css: '<style>' + fs.readFileSync(path.join(__dirname, './src/assets/loading/style.css')) + '</style>',
}

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
    vendor: [
      "react",
      "react-dom",
      "react-router-dom",
      "lodash",
      "moment",
      "redux",
      "react-redux",
      "axios",
      "redux-actions",
      "redux-saga",
    ],
    app: [
      // "./src/script/jquery/jquery.min.js",
      // "./src/assets/plugins/editor/editormd.js",
      __dirname + "/src/app.tsx",
    ],
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
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
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
          "resolve-url-loader",
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
      // chunks: ["vendor", "app", "po"],
      excludeChunks: ["blog"],
      template: __dirname + "/src/assets/index.ejs",
    }),
    new HtmlWebpackPlugin({
      // chunks: ["vendor", "blog", "po"],
      excludeChunks: ["app"],
      filename: "blog.html",
      template: __dirname + "/src/assets/blog.ejs",
      loading,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
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
  optimization: {
    minimize: isDev() ? false : true,
    // runtimeChunk: true,
    splitChunks: {
      chunks: "initial",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        common: {
          test: /.js$/,
          name: "common",
          chunks: "initial",
          priority: 2,
          minChunks: 2,
          reuseExistingChunk: true,
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
          priority: 20,
        },
      },
    },
  },
};

if (isDev()) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin({}));
}

module.exports = config;

function isDev() {
  return process.env.NODE_ENV === "development";
}
