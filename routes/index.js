const express = require('express')
const router = express.Router()

//login/landing page
//route - GET/

router.get('/', (req,res)=>{
    res.render('login')
})


//Dashboard
//route - GET/dashboard

router.get('/dashboard', (req,res)=>{
    res.render('dashboard')
})


module.exports = router