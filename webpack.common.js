const path = require('path');

module.exports = {
    entry: {
        app: './src/scripts/app.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['preset-env'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            }
        ],
        rules: [
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
            }
        ],
        rules: [{
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
        }]
    }
};