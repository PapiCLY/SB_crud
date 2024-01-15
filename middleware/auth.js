//protecting routes

module.exports = {
    ensureAuth: function(req,res,next){
        if(req.isAuthenticated()){
            return next()
        } else{
            red.rediret('/')
        }
    },
    ensureGuest: function(req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/dashboard')
        }else{
            return next()
        }
    }
}