const {clearCache} = require('../services/cache');

module.exports  = async (req,res,next) => {
    await next();
    res.user && clearCache(res.user.googleId);
}