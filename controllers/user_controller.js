const User = require('../models/user')
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_login',{
            title:'Login | Consult Pro',
    })
}
module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signup',{
        title:'Sign Up | Consult Pro',
    })
}

module.exports.profile = function(req,res){
    res.render('user_profile',{
        title: 'My Profile | Consult Pro',
    })
}

module.exports.createSession = function(req,res){
    // User.findOne({email: req.body.email})
    // .then(user=>{
    //     if(user){
    //         if(req.body.password != user.password) res.redirect('/users/signup');
    //         else res.redirect('/')
    //     }
    //     else res.redirect('/users/signup');
    // })

    // In Passport js using middleware so
    return res.redirect('/');
}


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('/');
    }
    User.findOne({email: req.body.email})
    .then(user=>{
        if(!user){
            User.create(req.body)
            .then(()=>{res.redirect('/users/login')})
        }
        else res.redirect('/');
    }).catch(err=>{console.log("Erro in finding the User ->UserController")})
}

module.exports.destroySession = function(req,res,next){
    req.logout(function(err){
        if(err) return next(err);
    });

    return res.redirect('/');
}