// var path = require('path');
// var webpack = require('webpack');
//
// // // vue.config.js
// // module.exports = {
// //     configureWebpack: {
// //         entry: './src/main.js',
// //         output: {
// //             outputDir: path.resolve(__dirname, '../public'),
// //             publicPath: '/public/',
// //             filename: 'build.js'
// //         },
// //     }
// // };
// const DEPLOYMENT_PATH = '/public/'
//
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production' ? DEPLOYMENT_PATH : 'http://localhost:8080/',
//     outputDir: path.resolve(__dirname, '../public'),
//     configureWebpack: {
//         entry: './src/main.js',
//         output: {
//             filename: 'build.js'
//         },
//     },
//     devServer: {
//         public: 'localhost:8080',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//     },
// }