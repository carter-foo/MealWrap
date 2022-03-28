const {
    override,
    // ...
    addWebpackAlias,
    overrideDevServer,
} = require('customize-cra');
const path = require('path');

const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            '/api': {
                target: 'http://localhost:18080',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': '/api',
                },
                secure: false,
            },
        },
    };
};

module.exports = {
    webpack: override(
        addWebpackAlias({
            '@': path.resolve(__dirname, './src'),
        }),
    ),
    devServer: overrideDevServer(devServerConfig()),
};

/* 
module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
*/
