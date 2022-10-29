const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
module.exports={
    mode:'development',
    entry:{
        main: path.resolve(__dirname,'./src/pages/main/main.js'),
        login: path.resolve(__dirname,'./src/pages/login/login.js')
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'[name]-[contenthash].js',
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Shopping Website',
            filename:'index.html',
            template:'./src/pages/main/main.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            filename:'login/index.html',
            template:'./src/pages/login/login.html',
            chunks:['login']

        })
    ],
    module:{
        rules:[{
            test:/\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

}
