module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('postcss-mixins')(),
    require('postcss-simple-vars')(),
    require('postcss-nested')(),
    require('postcss-cssnext')(),
    // require('cssnano')({
    //   autoprefixer: false
    // })
  ]
}

