module.exports.login = function(req,res){
    res.render('user_login',{
        title:'Login | Consult Pro',
    })
}
module.exports.signup = function(req,res){
    res.render('user_signup',{
        title:'Sign Up | Consult Pro',
    })
}