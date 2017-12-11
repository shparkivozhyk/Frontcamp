const path = require('path');

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
    module: {      
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }  
                }
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
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
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