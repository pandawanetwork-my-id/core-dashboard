const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')

process.noDeprecation = true

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './app/main.js',
            dependOn: 'shared',
        },
        shared: ['jquery', 'axios', 'sweetalert2', 'moment'],
    },
    output: {
        clean: true, // https://webpack.js.org/configuration/output/#outputclean
        path: path.resolve(__dirname, 'public'),
        asyncChunks: true, // https://webpack.js.org/configuration/output/#outputasyncchunks
        filename: '[hash]/[name].bundle.js', // https://webpack.js.org/configuration/output/#outputfilename
        chunkFilename: '[hash]/[name].js'
    },
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
        },
        alias: {
            packagejson: path.resolve(__dirname, 'package.json'),
            appModule: path.resolve(__dirname, 'app/modules'),
            components: path.resolve(__dirname, 'app/components'),
            libs: path.resolve(__dirname, 'app/libs'),
            layoutModule: path.resolve(__dirname, 'app/layouts'),
            helpers: path.resolve(__dirname, 'app/helpers'),
            services: path.resolve(__dirname, 'app/services'),
            configs: path.resolve(__dirname, 'app/configs'),
            theme: path.resolve(__dirname, 'app/theme'),
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new BundleStatsWebpackPlugin(),
        new Dotenv({
            path: './.env', // load this now instead of the ones in '.env'
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false, // load '.env.defaults' as the default values if empty.
            prefix: 'import.meta.env.' // reference your env variables as 'import.meta.env.ENV_VAR'.
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'app/theme/template.html'),
            inject: true
        }),
        new webpack.IgnorePlugin({resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/}),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxSize: 20000,
            minSize: 10000,
            // minRemainingSize: 0,
            minChunks: 2,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: [/node_modules/],
                use: {
                    loader: '@riotjs/webpack-loader',
                    options: {
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        sourceMap: true,
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            // postcssOptions: function () { // post css plugins, can be exported to postcss.config.js
                            //     return [
                            //         require('precss'),
                            //         require('autoprefixer')
                            //     ]
                            // }
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
              },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              use: {
                  loader: 'file-loader',
                  options: {
                    outputPath: 'img',
                    name(resourcePath, resourceQuery) {
                      // `resourcePath` - `/absolute/path/to/file.js`
                      // `resourceQuery` - `?foo=bar`
          
                      return '[contenthash].[ext]'
                    }
                  }
              }
            },
        ]
    },
    devServer: {
        allowedHosts: 'all', // https://webpack.js.org/configuration/dev-server/#devserverallowedhosts
        liveReload: true, // https://webpack.js.org/configuration/dev-server/#devserverlivereload
        bonjour: false, // https://webpack.js.org/configuration/dev-server/#devserverbonjour
        open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
        compress: true, // https://webpack.js.org/configuration/dev-server/#devservercompress
        port: process.env.APP_PORT, // https://webpack.js.org/configuration/dev-server/#devserverport
        host: process.env.APP_HOST, // https://webpack.js.org/configuration/dev-server/#devserverhost
        hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
        server: 'http', // https://webpack.js.org/configuration/dev-server/#devserverserver
        setupExitSignals: true, // https://webpack.js.org/configuration/dev-server/#devserversetupexitsignals
        client: { // https://webpack.js.org/configuration/dev-server/#devserverclient
            logging: 'info',
            progress: true, // https://webpack.js.org/configuration/dev-server/#progress
        },
        static: { // https://webpack.js.org/configuration/dev-server/#devserverstatic
            directory: path.join(__dirname, 'public'), // https://webpack.js.org/configuration/dev-server/#publicpath
            serveIndex: true, // https://webpack.js.org/configuration/dev-server/#serveindex
        },
        watchFiles: ['app/**/*', 'package.json', '.env'], // https://webpack.js.org/configuration/dev-server/#devserverwatchfiles
        onListening: function (devServer) { // https://webpack.js.org/configuration/dev-server/#devserveronlistening
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined')
            }
            const port = devServer.server.address().port
            console.log('Listening on port:', port)
        },
    }
}