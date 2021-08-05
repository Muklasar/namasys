const router  = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.post('/register', async (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user)
    try{
        const saveUser = await user.save()
        res.send(saveUser)
    }
    catch(err){
        res.status(400).send(err)
    }
})


router.post('/login', async (req, res)=>{
    console.log(req.body)
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email dose not match')
    const password = await User.findOne({password: req.body.password})
    if(!password) return res.status(400).send('Password dose not match')

    const token = jwt.sign({__id: user.id}, process.env.TOKEN_SECRET, {expiresIn: '300s'})
    res.header('auth-token', token).send(token)
})


module.exports = router