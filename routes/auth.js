const express = require('express')
const router = express.Router()

//login/landing page
//route - GET/

router.get('/google', passport.authenticate('google'))

//Dashboard
//route - GET/dashboard

router.get('/dashboard', (req,res)=>{
    res.render('dashboard')
})


module.exports = router