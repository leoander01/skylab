module.exports = {
    //arquivo principal
    entry: ['@babel/polyfill', './src/main.js'],
    //enviar o arquivo convertido
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        //caminho do servidor
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [{
            //expressão regular para buscar o arquivo com a extensão .js
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }],
    },
};