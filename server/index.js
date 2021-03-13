const Koa = require('koa')
const Router = require('koa-router')
const actions = require('./actions')
const router = new Router()
const app = new Koa()


actions(router)

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)