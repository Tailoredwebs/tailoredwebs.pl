var path = require("path");
var Html = require('html-webpack-plugin');
var MiniCSS = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = function (env) {
    const isDev = env && env.dev ? true : false;
    console.log(isDev, 'isDev');

    const config = {
        entry: "./src/app.js",
        output: {
            filename: "out.js",
            path: path.resolve(__dirname, "docs")
        },
        mode: isDev ? 'development' : 'production',
        module: {
            rules: [{
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCSS.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        isDev ? 'style-loader' : MiniCSS.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    new require('autoprefixer')({
                                        browsers: [
                                            'ie 11' // tu definiujemy wsparcie dla przegladarek w css
                                        ]
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'fonts',
                            outputPath: 'fonts'
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        plugins: [
            new Html({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new MiniCSS({
                filename: "app.css", // definiujemy adres pliku css
            }),
            new CopyWebpackPlugin([{
                    from: './src/img',
                    to: 'img'
                },
                {
                    from: './src/js/plugin',
                    to: 'js/plugin'
                },
                {
                    from: './src/send-mail.php',
                    to: './send-mail.php'
                },
            ])

        ]
    }

    return config;
}