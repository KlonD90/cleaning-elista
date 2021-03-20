const jwt = require('jsonwebtoken')

const secret = 'cleaning-elista'

const adminLoginService = {}

adminLoginService.secret = secret
adminLoginService.login = (email, password) => jwt.sign({email, password}, secret)

module.exports = adminLoginService