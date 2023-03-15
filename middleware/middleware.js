const User = require('../models/user');

module.exports = {

    isLoggedIn: async (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error', 'You need to LogIn first!');
        res.redirect('/users/login');
    } 
}