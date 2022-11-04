const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
module.exports={
    mode:'development',
    entry:{
        main: path.resolve(__dirname,'./src/pages/main/main.js'),
        login: path.resolve(__dirname,'./src/pages/login/login.js'),
        register: path.resolve(__dirname,'./src/pages/register/register.js'),

    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'[name]-[contenthash].js',
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Shopping Website',
            filename:'main/index.html',
            template:'./src/pages/main/main.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            filename:'login/index.html',
            template:'./src/pages/login/login.html',
            chunks:['login']

        }),
        new HtmlWebpackPlugin({
            filename:'register/index.html',
            template:'./src/pages/register/register.html',
            chunks:['register']

        }),


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
