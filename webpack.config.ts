import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { basename } from "./env";
import { DefinePlugin } from "webpack";

const BUILD_FOLDER = "docs";

export default ({ development, production }: any) => {
  return {
    entry: "./site/index.tsx",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, BUILD_FOLDER),
      filename: "bundle.js",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      client: {
        progress: true,
      },
      open: ["/"].filter(Boolean),
      historyApiFallback: true,
      compress: true,
      hot: true,
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new DefinePlugin({
        "process.env.development": development,
        "process.env.production": production,
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: "./site/**/*",
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public/404.html",
            to: "." /* copy the 404.html to the "docs" folder */,
          },
        ],
      }),
    ],
  };
};
