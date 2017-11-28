const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
}).listen(3000, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log('Serving on port: 3000');
})