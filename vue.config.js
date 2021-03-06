module.exports = {
   publicPath: process.env.NODE_ENV === 'production'
    ? '/app/'
    : '/',
    css: {
       loaderOptions: {
          css: {},
          postcss: {
             plugins: [
                require('postcss-px2rem')({
                   remUnit: 37.5
                })
             ]
          }
       }
    },
}