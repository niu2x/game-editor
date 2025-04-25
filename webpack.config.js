import path from 'path'
import {
  fileURLToPath
} from 'url';
import {
  dirname
} from 'path';

import CopyPlugin from "copy-webpack-plugin"

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = dirname(__filename);

const config = {
  entry: './src/index.js',
  name: 'browser',
  output: {
    filename: 'index.js',
    // path: path.resolve(__dirname, 'dist/browser'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: 'src/index.html',
          to: 'index.html'
        }, // Copy index.html from src to dist
      ],
    }),
  ],
  module: {
    rules: [{
        test: /\.jsx?$/, // 匹配 .js 和 .jsx 文件
        include: /\/src\//, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 babel-loader 处理 JSX
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // resolve: {
  //   extensions: ['.js', '.jsx'], // 自动解析 .js 和 .jsx 文件
  // },
}

export default config;