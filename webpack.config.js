const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    devServer: {
        port: 8081,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'build.css'
        }),
        new CleanWebpackPlugin(),
        new optimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })     
      ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(svg|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                       {
                        loader: MiniCssExtractPlugin.loader,
                        options : {
                        },
                       },
                       'css-loader'
                    ]
            }

        ]
    },
};
    
