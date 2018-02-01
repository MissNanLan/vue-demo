/* 获取配置 */
var config = require('../config')

/* 如果node的环境中没有设置当前的环境（node_env）,则使用config中的配置作为当前的环境 */
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.dev.env

/* 一个可以调用默认软件打开网址、图片、文件等内容的插件
 这里用它调用默认浏览器打开dev-server监听的端口，例如localhost:8080 */
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')

/* 这里使用该插件可以将前端开中涉及到的请求代理到API服务器上，方便与服务器对接 */
var proxyMiddleware = require('http-proxy-middleware')

var webpackConfig = require('./webpack.dev.conf')

/* dev-server 监听的端口，默认为config.dev.port设置的端口，即8080 */
var port = process.env.PORT || config.dev.port

/* 定义HTTP代理表，代理到API服务器 */
var proxyTable = config.dev.proxyTable
/*  创建1个express实例 */
var app = express()
var jsonServer = require('json-server')
var apiServer = jsonServer.create()
var apiRouter = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use('/api',apiRouter)
apiServer.listen(port + 1, function () {
  console.log('JSON Server is running')
})
/* 根据webpack配置文件创建compiler对象 */
var compiler = webpack(webpackConfig)

/*  webpack-dev-middleware使用compiler对象来对相应的文件进行编译和绑定
 编译绑定后将得到的产物存放在内存中而没有写进磁盘
 将这个中间件交给express使用之后即可访问这些编译后的产品文件 */
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
/* webpack-hot-middleware，用于实现热重载功能的中间件 */
var hotMiddleware = require('webpack-hot-middleware')(compiler)

/* 当html-webpack-plugin提交之后通过热重载中间件发布重载动作使得页面重载 */
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

/* 将 proxyTable 中的代理请求配置挂在到express服务器上 */
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]

  /*  格式化options，例如将'www.example.com'变成{ target: 'www.example.com' */
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
// 重定向不存在的URL，常用于SPA
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
// 使用webpack开发中间件
// 即将webpack编译后输出到内存中的文件资源挂到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 将静态资源挂到express服务器上
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

/*var apiServer = express()
 var bodyParser = require('body-parser')
 apiServer.use(bodyParser.urlencoded({ extended: true }))
 apiServer.use(bodyParser.json())
 var apiRouter = express.Router()
 var fs = require('fs')
 apiRouter.route('/:apiName')
 .all(function (req, res) {
 fs.readFile('./db.json', 'utf8', function (err, data) {
 if (err) throw err
 var data = JSON.parse(data)
 if (data[req.params.apiName]) {
 res.json(data[req.params.apiName])
 }
 else {
 res.send('no such api name')
 }

 })
 })


 apiServer.use('/api', apiRouter);
 apiServer.listen(port + 1, function (err) {
 if (err) {
 console.log(err)
 return
 }
 console.log('Listening at http://localhost:' + (port + 1) + '\n')
 })*/

// 启动express服务器并监听相应的端口（8080）
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})
