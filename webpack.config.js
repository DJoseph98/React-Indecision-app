const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', //configure une rule qui dit ici d'utiliser babel
            test: /\.js$/, // pour chaque fichier js présent dans le projet
            exclude: /node_modules/ // sauf pour node_modules
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map', // permet de renvoyer précisement à la source si erreur
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};