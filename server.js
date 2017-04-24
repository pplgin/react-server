import Koa from 'Koa';
import serve from 'koa-static';
import fs from 'fs'
import path from 'path'
import proxy from 'koav-api-proxy'
import views  from 'koa-views'
import webpack from 'webpack'


import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.dev'
import clientRoute  from './middlewares/clientRoute'


const app = new Koa();
const compiler = webpack(webpackConfig)
let router = require('koa-router')();




app.use(views(__dirname + '/views', {
  map: {
    html: 'html',
    swig: 'swig'
  },
  extension: 'swig'
}));


// static source
app.use(serve(__dirname + '/static'))

// 静态资源代理
app.use(proxy('http://0.0.0.0:3032', {
  match: '/dist/'
}))

// 静态资源编译
const server = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  inline: true,
  historyApiFallback: true,
  noInfo: false,
  stats: {
    colors: true
  }
});

app.use(clientRoute);

router.get('/api/cont', async (ctx, next)=>{
  ctx.body = {
    data:'asdasdadad'
  }
})

app.use(router.routes())
  .use(router.allowedMethods())


server.listen(3032, () => {
  console.log('--webpack server is running at 3032--');
});

// start
app.listen('3033', () => {
  console.log('server is running at http://0.0.0.0:3033');
});