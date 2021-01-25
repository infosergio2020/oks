const path = require('path');
const express = require('express');
const app = express();
 
//importing routes (rutas)
 
//settings (configuraciones)
app.set('port', process.env.PORT || 3000); //toma el puerto de OS sino colocalo en el puerto 3000
app.set('views', path.join(__dirname,'views'));//le indica al server que la carpeta views esta en esta direccion (__dirname es la ruta absoluta al proyecto)
 
//middlewares
 
// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
