module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://online-wallet-01.herokuapp.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    } };