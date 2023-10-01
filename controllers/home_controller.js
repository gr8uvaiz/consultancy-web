module.exports.home = function(req,res){
    res.render('home',{
        title: 'Home | Consult Pro',
    })
}
module.exports.about = function(req,res){
    res.render('about',{
        title: "About | Consult Pro"
    })
}