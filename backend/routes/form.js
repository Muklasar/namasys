const router = require('express').Router()
const verify = require('./verifyToken')
const Form = require('../model/Form')

router.post('/', verify, async (req, res)=>{
    const form = new Form({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address
    })
    console.log(form)
    try{
        saveFormData = await form.save()
        res.send(saveFormData)
    }
    catch(err){
        res.status(400).send('Form not save')
    }
})

module.exports = router