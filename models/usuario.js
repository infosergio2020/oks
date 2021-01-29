var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
    },
    exitos:{
        type: [String]
    }
});

usuarioSchema.methods.toString = function() {
    return `nombre: ${this.nombre} `;
}

/*CRUD Basico BEGIN***************************************/
usuarioSchema.statics.createInstance = function (nombre, email) {
    return new this({ nombre, email});
}

usuarioSchema.statics.getAll = function (callback) {
    return this.find({}, callback);
}

usuarioSchema.statics.add = function (usuario, callback) {
    return this.create(usuario, callback);
}

usuarioSchema.statics.getById = function (id, callback) {
    return this.findOne({ _id: id }, callback);
}

usuarioSchema.statics.update = function (id, nombre, callback) {
    return this.findOneAndUpdate({ _id: id }, { nombre: nombre }, { returnNewDocument: true, runValidators: true, context: 'query' }, callback); // alternative use findByIdAndUpdate
}

usuarioSchema.statics.deleteById = function (id, callback) {
    return this.deleteOne({ _id: id }, callback);
}


module.exports = mongoose.model('Usuario', usuarioSchema);