const router = require('express').Router()
const form = require('../model/Form')
const verify = require('./verifyToken')

router.get('/', verify, async (req, res) => {
    form.find((err, resultArray) => {
        if (!err) {
            res.send(resultArray);
        }
        else {
            res.status("400").send("error")
        }
    });
    res.send(data)
})

router.delete('/:id', verify, async (req, res) => {
    const id = req.params.id
    myquery = {"_id": id}
    form.deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        res.send("deleted")
})
})


module.exports = router;