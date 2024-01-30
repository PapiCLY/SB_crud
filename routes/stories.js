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
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (error) {
        console.error(err)
        res.render('error/500')
    }
})

//show all stories
//route - /stories
router.get('/', ensureAuth, async(req,res)=>{
    try {
        const stories = await Story.find({ status: 'public' })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()

        res.render('stories/index', {
            stories,
        })
    } catch (error) {
        console.error(err)
        res.render('error/500')
    }
})



//show edit page
//route - /stories/edit/:id
router.get('/edit/:id', ensureAuth, async(req,res)=>{
    const story = await Story.findOneAndDelete({
        _id: req.params.id
    })
})



module.exports = router