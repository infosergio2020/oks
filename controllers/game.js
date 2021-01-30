var Usuario = require('../models/usuario');

module.exports =  {
    create_new_user_get: function( req, res, next ) {
         res.render('lestgo', { title: 'Crear usuario', errors:{}, usuario: new Usuario()} );
    },
    create_new_user_post: function( req, res, next ) {
        console.log(`voy a procesar los siguientes datos: ${req.body.nombre}`);
        Usuario.create({nombre: req.body.nombre},(err,nuevoUsuario)=>{
            if(err){   
                console.log(err);
                res.render('lestgo',{errors: err.errors, usuario: new Usuario({nombre:req.body.nombre})});
            }
            else{
                console.log(nuevoUsuario);
                res.render('game',{usuario:nuevoUsuario});
            }
        });
   }   
}