const { User } = require('../models')
const yup = require('yup')
const koaBody = require('koa-body')
const adminLoginService = require('../services/adminLogin')
const isAdmin = require('../middleware/isAdmin')

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

module.exports = (router) => {
    router.post('/api/admin/login', koaBody(), async (ctx) => {
        const obj = ctx.request.body
        const isValid = await loginSchema.isValid(obj)
        if (isValid) {
            const token = adminLoginService.login(obj.email, obj.password)
            ctx.body = {
                code: 'ok',
                token: token
            }
        } else {
            ctx.body = {code: 'error', message: 'not valid'}
            ctx.status = 400
        }

    })

    router.get('/api/admin/isAdmin', isAdmin, async (ctx) => {
        ctx.body = {
            code: 'ok'
        }
    })
}