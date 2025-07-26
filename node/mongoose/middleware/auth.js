const jwt = require('jsonwebtoken')
exports.auth = (req,res,next)=>{
    try {        
        let bearerToken = req.headers.authorization
        // console.log(bearerToken)
        let token = bearerToken.split(' ')[1]
        let decode =  jwt.verify(token,process.env.JWT_SECRET)
        req.user = decode.id
        next()
    } catch (error) {        
        res.json({success:false,message:error.message})
    }
}