const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

// x-response-time
// 中间件设计:  日志 =>  bodyparser => 路由
app
.use(static(path.join(__dirname, './page')))


app.listen(5000);