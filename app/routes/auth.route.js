const express = require("express");
const router = express.Router();
const {login, singup} = require("../controlles/auth.controller")

/* router.post("/login", (req, res) => {
    try{
        res.send("Api Login Works!");
    } catch(error){
        res.send(error.message)
    }
})
 */


router.post("/login", login)
router.post("/singup", singup)
module.exports = router ;