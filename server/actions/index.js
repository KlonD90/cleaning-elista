const preorderRoutes = require('./preorder')

module.exports = (router) => {
    preorderRoutes(router)
}