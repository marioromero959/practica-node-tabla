const fs = require('fs');
// Requerimos el paquete colors
const colors = require('colors');
// Transformamos en una funcion asincrona
const crearArchivo = async(base,listar)=>{
    try {
        let salida = ''
    for(let i = 1; i<=10; i++){
        salida += `${colors.red(base)} x ${i} = ${base*i}\n`;
    }
    if(listar)
    console.log(salida)
// Crea el archivo tabla.txt, le mandamos como parametros 'salida'
// Podemos poner la ruta de la carpeta donde queremos que se cree el archivo ej:salida/tabla.txt
   fs.writeFileSync('tabla.txt',salida);
   return `tabla del ${base}`;
    } catch (error) {
        throw error;
    }
}
// Exportamos la funcion para utilizarla en app.js
module.exports = {
    crearArchivo    
}