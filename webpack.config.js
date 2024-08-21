// var webpack=require('webpack');
const path = require('path');
var config={
    // entry:'./src/page/index/index.js',
    entry:{
        'index':['./src/page/index/index.js'],
        'login':['./src/page/login/index.js'],
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js'
    },
    externals:{
        'jquery':'window.jQuery'
    },
    // plugins:[
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name:'commons',
    //         filename:'js/base.js'
    //     })
    //     ]
};



module.exports=config;