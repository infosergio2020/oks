var Cancion = require('../models/cancion');

module.exports = {
    list: function(req,res,next) {
        Cancion.find({},(err,canciones)=>{
            res.render('admin/songs',{canciones:canciones});
        });
    },
    create_get: function(req, res, next) { 
        console.log(new Cancion());
        res.render('admin/create_song', { title: 'Agregar cancion', errors:{}, cancion: new Cancion()}); 
    },
    create_post: function(req,res,next){
        Cancion.create({nombre: req.body.nombre},(err,nuevaCancion)=>{
            if(err){   
                console.log(err);
                res.render('admin/create_song',{errors: err.errors, cancion: new Cancion({nombre:req.body.nombre})});
            }
            else{
                res.redirect('/admin');
            }
        });
    },
    update_get: function( req, res, next ) {
        Cancion.findById(req.params.id, ( err, cancion )=> {
            res.render('admin/update_song', {errors:{}, cancion:cancion});
        })
    },
    update_post: function( req, res, next ) {
        var update_values = {nombre: req.body.nombre};
        Usuario.findByIdAndUpdate(req.params.id, update_values, ( err, cancion )=> {
            if(err){
                console.log(err);
                res.render('admin/update_song', {errors:err.errors, cancion: cancion});
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