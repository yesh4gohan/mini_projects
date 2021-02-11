const crypto = require('crypto')

console.log(crypto.createHash('sha512').update(`zkui@yopmail.com39e760479d69f61ada2f598007cab3aa${Math.round((new Date()).getTime() / 1000)}`).digest('hex'))

console.log(Math.round((new Date()).getTime() / 1000))