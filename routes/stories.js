const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')
const Story = require('../models/Story')

//show add page
//route - /stories/add
router.get('/add', ensureAuth, (req,res)=>{
    res.render('stories/add')
})


//process the add form for user stories
//route - POST /stories
router.post('/', ensureAuth, async (req,res)=>{
    try {
        req.body.user = req.user.id
        await Story.create(req,body)
        res.redirect('/dashboard')
    } catch (error) {
        console.error(err)
        res.render('error/500')
    }
})




module.exports = router