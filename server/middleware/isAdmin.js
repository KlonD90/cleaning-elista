const jwt = require('jsonwebtoken')
const adminLoginService = require('../services/adminLogin')

module.exports = async (ctx, next) => {
    const token = ctx.headers['authorization'] || ''

    try {
        console.log('token', token)
        jwt.verify(token, adminLoginService.secret)
        await next()
    } catch(e) {
        ctx.body = {code: 'error', message: 'access forbiden'}
        ctx.status = 403
    }
}