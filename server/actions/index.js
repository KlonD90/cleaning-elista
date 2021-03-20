const preorderRoutes = require('./preorder')
const adminRoutes = require('./admin')

module.exports = (router) => {
    preorderRoutes(router)
    adminRoutes(router)
}