module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer : {
    proxy : {
      '/' : {
        "target" : "http://api-plantsmartfarm.herokuapp.com",
        "pathRewrite":{'^/':''},
        "changeOrigin":true,
        "secure":false
      }
    }
  }
}
