const path=require('path')
module.exports={
    mode:'development',
    entry:path.resolve(__dirname,'./src/app.js'),
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'app.bundle.js'
    }
}
