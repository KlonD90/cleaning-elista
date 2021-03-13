const { User } = require('../models')
const yup = require('yup')
const koaBody = require('koa-body')

const preorderSchema = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
    address: yup.string().required(),
});

module.exports = (router) => {
    router.get('/hello_world', (ctx) => {
        ctx.body = 'Hello world!'
    } )
    router.post('/preorder', koaBody(), async ctx => {
        console.log('preroder data', ctx.request.body)
        const preorderData = ctx.request.body
        try {
            const isValid = await preorderSchema.isValid(preorderData)
            console.log('success', isValid)
            if (isValid) {
                await User.create(preorderData)
                ctx.body = 200
                ctx.body = 'Preorder created'
            } else {
                ctx.status = 400
                ctx.body = 'Invalid format'
            }
        } catch(e) {
            console.error(e)
        }
    })

}