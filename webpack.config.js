const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
})

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
            'webpack-dev-server/client?http://0.0.0.0:3000',
            'webpack/hot/only-dev-server', //only prevets reload on syntax errors
            './src/js/app.js',
            'font-awesome/scss/font-awesome.scss'
           ], 
    output: {
        // to create an absolute path
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                // with use we can specify multiple loaders
                // the last element is applied first
                //css-loader will make it understand the imports and then the style loader will allow the imports to the head otherwise we use the extract-text-webpack-plugin to extract the css to a separate file
                use: ['style-loader', 'css-loader']
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'font-awesome-loader'}
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            cache: '/dist',
            // compress: true
        }),
        extractPlugin
    ],
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    // }
};