const Service = require('../models/service');

module.exports.service = async function(req,res){
    const service = await Service.find({});
    res.render('services',{
        title: 'Service | Consult Pro',
        services: service,
        user: req.user
    })
}

module.exports.create = async function(req,res){
    const service = await Service.create(req.body);
    res.redirect('/services');

}