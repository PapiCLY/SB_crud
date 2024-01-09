const express = require('express')
const passport = require('passport')
const router = express.Router()

//login/landing page
//route - GET/

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


//Google auth callback
//route - GET/dashboard

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/' }), (req, res) => {
        res.redirect('/dashboard')
    }
)


module.exports = router