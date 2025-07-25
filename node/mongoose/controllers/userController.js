const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

exports.register = async (req,res) => {
    let {email,password} = req.body
    let hashPassword =await bcrypt.hash(String(password),10)
    let user = new User({email,password:hashPassword})
    await user.save()
    res.json({success:true,message:`user created success fully`})
}