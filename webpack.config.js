module.exports = {
    entry: './src/app.jsx',
    output: {
      path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            DataTable: 'src/components/DataTable.jsx',
            TableRow: 'src/components/TableRow.jsx',
            RequestData: 'api/DataRequest.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};