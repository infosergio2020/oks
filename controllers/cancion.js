var Cancion = require('../models/cancion');

module.exports = {
    list: function(req,res,next) {
        Cancion.find({},(err,usuarios)=>{
            res.render('admin/users',{usuarios:usuarios});
        });
    },
    create_get: function(req, res, next) { 
        console.log(new Usuario());
        res.render('admin/create_user', { title: 'Crear usuario', errors:{}, usuario: new Usuario()}); 
    },
    create_post: function(req,res,next){
        Usuario.create({nombre: req.body.nombre},(err,nuevoUsuario)=>{
            if(err){   
                console.log(err);
                res.render('admin/create_user',{errors: err.errors, usuario: new Usuario({nombre:req.body.nombre})});
            }
            else{
                res.redirect('/admin');
            }
        });
    },
    update_get: function( req, res, next ) {
        Usuario.findById(req.params.id, ( err, usuario )=> {
            res.render('admin/update_user', {errors:{}, usuario:usuario});
        })
    },
    update_post: function( req, res, next ) {
        var update_values = {nombre: req.body.nombre};
        Usuario.findByIdAndUpdate(req.params.id, update_values, ( err, usuario )=> {
            if(err){
                console.log(err);
                res.render('admin/update_user', {errors:err.errors, usuario: usuario});
            }else{
                res.redirect('/admin');
            }
        });
    },
    delete: function( req, res, next ){
        console.log(req.params);
        Usuario.findByIdAndDelete(req.params.id, ( err ) => {
            if(err) {
                next(err);
            }else{
                res.redirect('/admin');
            }
        })
    }
};