const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")


module.exports = {

    // All files imported in our entry file will be bundled..
    entry:path.join(__dirname,"src","index.tsx"),

    // The bundled file(s) will live in this path..
    output:{
        path:path.join(__dirname,"public","dist"),
        filename:"bundle.js"
    },

    // No need to add an extension to the files we import
    resolve:{
        extensions:[".ts",".js",".tsx",".ts"]
    },

    module:{
      
        rules:[
            {
                test:/\.(js|jsx|tsx)$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:"html-loader"
                }
            }
        ]
    },

    // Adding some plugins...
    plugins:[
        // webpack development server will server up this template by default...
        // Webpack injects our bundle js file into this template... (in memory...)
       new HTMLPlugin({
           template:path.join(__dirname,"public","index.html")
       })
    ]
}