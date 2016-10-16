fis.match('*.{js, css}', { // 加上后缀md5戳
  useHash: true
})
/*尝试图片合并*/
// fis.match('::package', { // 启动插件
//   spriter: fis.plugin('csssprites')
// })
// fis.match('*.css', {
//   useSprite: true
// })
fis.match('*.js', {
  //压缩JS
  optimizer: fis.plugin('uglify-js')
})
