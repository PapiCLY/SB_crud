const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

//login/landing page
//route - GET/
//ensureGuest - confirms the user has not been authenticated, 
//and routes them to the login page if they try to go directly to an authenticated page
router.get('/', ensureGuest, (req,res)=>{
    res.render('login', {
        layout: 'login'
    })
})


//Dashboard
//route - GET/dashboard
//ensureAuth - will route a user to an authenticated page if they have already been confirmed logged in and authenticated. 
//user will not be required to login again
router.get('/dashboard', ensureAuth,  (req,res)=>{
    res.render('dashboard')
})


module.exports = router