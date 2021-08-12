const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir);
}

const vueConfig = {
    outputDir: process.env.BASE_URL ? `dist${process.env.BASE_URL}` : 'dist',
    publicPath: process.env.BASE_URL,
    productionSourceMap: isProd && process.env.VUE_APP_MODE === 'test',
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@styles/variables";'
            }
        }
    },
    chainWebpack: (config) => {
        // 配置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@images', resolve('src/assets/images'))
            .set('@styles', resolve('src/styles'))
            .set('@components', resolve('src/components'))
            .set('@directives', resolve('src/directives'))
            .set('@filters', resolve('src/filters'))
            .set('@plugins', resolve('src/plugins'))
            .set('@mixins', resolve('src/mixins'))
            .set('@services', resolve('src/services'))
            .set('@constants', resolve('src/constants'))
            .set('@store', resolve('src/store'))
            .set('@views', resolve('src/views'))
            .set('@layouts', resolve('src/layouts'))
            .set('@helpers', resolve('src/helpers'))
            .set('@mock', resolve('src/mock'))
            .set('@router', resolve('src/router'));

        config.when(isProd, (config) => {
            // 开启GZip压缩
            config.plugin('compression-webpack-plugin').use(
                new CompressionPlugin({
                    test: /\.js$|\.html$|\.css$/, // 匹配文件名
                    minRatio: 1, // 压缩率小于1才会压缩
                    threshold: 10240, // 对超过10k的数据压缩
                    deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
                })
            );

            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                    libs: {
                        name: 'chunk-libs',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: 'initial' // only package third parties that are initially dependent
                    },
                    elementUI: {
                        name: 'chunk-elementUI', // split elementUI into a single package
                        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                        test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                    },
                    antv: {
                        name: 'chunk-@antv', // split @antv into a single package
                        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                        test: /[\\/]node_modules[\\/]_?@antv(.*)/ // in order to adapt to cnpm
                    }
                }
            });
            // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
            config.optimization.runtimeChunk('single');
        });

        config.when(process.env.use_analyzer, (config) => {
            // 打包分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        });
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
};

module.exports = vueConfig;
