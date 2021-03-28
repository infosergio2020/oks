var Cancion = require('../models/cancion');
//HOLA COMO ESTAS

//para el borrado en disco de la imagen
var path = require ('path');
var fs = require( 'fs-extra');


module.exports = {
    play: async function(req, res, next) {
        const { id } = req.params;
        song =  await Cancion.findById(id);
        console.log(song.imagePath);
        res.render('admin/playSong',{ cancion:song });
    },
    list: async function(req, res, next) {
        const canciones = await Cancion.find();
        res.render('admin/songs',{ canciones:canciones });

    },
    create_get: function(req, res, next) {
        res.render('admin/create_song', { title: 'Agregar cancion', errors: {}, cancion: new Cancion() });
    },
    create_post: async function(req, res, next) {
       // necesito extraer del body los datos que voy a guardar en la base de datos
        const {name} = req.body;
        // console.log(req.file);
        const newSong = {
            title: name,
            imagePath: req.file.path
        };
        // necesito crear un objeto documento de mongodb 
        const song = new Cancion(newSong);
        await song.save()
        return res.json({
            message:'Photo seccessfully saved',
            song
        })
    },
    update_get: function(req, res, next) {
        Cancion.findById(req.params.id, (err, cancion) => {
            res.render('admin/update_song', { errors: {}, cancion: cancion });
        })
    },
    update_post: async function(req, res, next) {
        const { id } = req.params;
        const { title } = req.body;
        const updatedPhoto = await Cancion.findByIdAndUpdate(id,{
            title
        });
        return res.json({
            message:'Seccessfully Updated',
            updatedPhoto
        });
    },
    delete: async function(req, res, next) {
        const { id } = req.params;
        const cancion = await Cancion.findByIdAndRemove(id);
        if (cancion){
            fs.unlink(path.resolve(cancion.imagePath));
        }
        return res.json({
            message:'Cancion Deleted',
            cancion
        });
    }
};