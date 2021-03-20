const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const actions = require('./actions')
const router = new Router()
const app = new Koa()


actions(router)

app
    .use(cors({credentials: true}))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3001)