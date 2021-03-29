var Cancion = require('../models/cancion');
//HOLA COMO ESTAS

//para el borrado en disco de la imagen
var path = require ('path');
var fs = require( 'fs-extra');

const random =  (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = {
    //este controlador es para la parte del juego
    list_3_canciones: async function(req, res, next) {
        const canciones = await Cancion.aggregate([ { $sample: { size: 4 } } ] );
        indice = random(0,4);
        res.render('juego',{ canciones:canciones, cancionCorrecta:canciones[indice] });
    },
    //este controlador es para la parte del admin (comprobar reproduccion de canciones)
    play: async function(req, res, next) {
        const { id } = req.params;
        song =  await Cancion.findById(id);
        res.render('admin/playSong',{ cancion:song });
    },
    //este controlador es para que el admin pueda listar el contenido de canciones que subió
    list: async function(req, res, next) {
        const canciones = await Cancion.find();
        res.render('admin/songs',{ canciones:canciones});
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
        // return res.json({
        //     message:'Photo seccessfully saved',
        //     song
        // })
        return res.redirect('/')
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