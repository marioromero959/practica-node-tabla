// Con esto tenemos disponibles las funciones de Filesystem de node
const fs = require('fs');
// Con esto requerimos el archivo yargs de nuestra configuracion y extraemos el argv
const argv = require('../03-Bases-de-Node/config/yargs');
// Requerimos la funcion de multiplicar.js
const { crearArchivo } = require('./helpers/multiplicar')

console.clear() //Limpia la consola
/* let salida = ''
    for(let i = 1; i<=10; i++){
        salida += `${5} x ${i} = ${5*i}\n`;
    }
    console.log(salida)
// Crea el archivo tabla.txt, le mandamos como parametros 'salida' y al callback de error
    fs.writeFile('tabla.txt',salida, (err)=>{
        if(err) throw err;
        console.log('Tabla creada')
    }) */
// Tambien se puede usar el writeFileSync

// Solo demostracion ---
// const [ , ,arg3] = process.argv;//Nos da los argumentos del proceso
// const [, base] = arg3.split('=') //Tomamos el numero de la base que mandamos por consola
// console.log(base)
// ---

// console.log(process.argv)//Argumentos de procesos
// console.log(argv)//Argumentos de yargs

// Enviamos la base por consola usando yargs
 crearArchivo(argv.b,argv.l)
     .then(nombreArchivo => console.log(nombreArchivo,'creada'))
    .catch(err=>console.log(err))  