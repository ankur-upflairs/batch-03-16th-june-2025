const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.register = async (req,res) => {
    let {email,password} = req.body
    
    let hashPassword =await bcrypt.hash(String(password),10)
    let user = new User({email,password:hashPassword})
    await user.save()
    res.json({success:true,message:`user created success fully`})
}

exports.login =async (req,res) =>{
    let {email,password} = req.body
    let user =await User.findOne({email})
    // console.log(user)
    if(!user){
       return res.json({success:false,message: 'user not found'})
    }
    let passwordMatch =await bcrypt.compare(String(password),user.password)
    if(!passwordMatch){
        return res.json({success:false,message: 'password not match'})        
    }
    let token = jwt.sign({email,id:user._id},process.env.JWT_SECRET)
    res.json({success:true,message: 'user login successfully',token})
    
}