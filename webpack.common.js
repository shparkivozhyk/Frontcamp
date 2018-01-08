const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        test: './src/test/test.js'

    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'News',
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module: {      
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }    
                ]
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader:'custom-loader'
                    }
                ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use: [
                    {
                        loader: 'url-loader?limit=100000'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            }
        ],
    }   
};