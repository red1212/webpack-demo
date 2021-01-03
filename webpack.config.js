/**
 * webpack的配置文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'dist')     //采用绝对路径
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //创建style标签，将js 中的样式资源插入进行，添加到header中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //将less文件编译为css文件
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        // HtmlWebpackPlugin 创建一个html文件，并且自动引入打包输出后的资源（JS Css）
        new HtmlWebpackPlugin({
            //以index.html为模版，并自动引入打包输出后的资源
            template:'./src/index.html'
        })
    ]
}