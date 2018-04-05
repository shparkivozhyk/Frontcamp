module.exports = {
    devtool: 'inline-source-map',
    entry : './public/tests/todos.spec.js',
    output: {
        filename: './[name].js'
    },
    resolveLoader: {
        modules: ["node_modules", "loaders"]
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                test: /.html?$/,
                use: [{
                    loader: 'text-loader'
                }]
            }
        ]
    }
};