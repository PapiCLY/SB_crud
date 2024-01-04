const express = require('express')
const router = express.Router()

//login/landing page
//route - GET/

router.get('/', (req,res)=>{
    res.send('Login')
})


//Dashboard
//route - GET/dashboard

router.get('/dashboard', (req,res)=>{
    res.send('Dashboard')
})


module.exports = router