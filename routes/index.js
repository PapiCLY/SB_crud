const express = require('express')
const router = express.Router()

//login/landing page
//route - GET/

router.get('/', (req,res)=>{
    res.render('login.hbs')
})


//Dashboard
//route - GET/dashboard

router.get('/dashboard', (req,res)=>{
    res.send('dashboard')
})


module.exports = router