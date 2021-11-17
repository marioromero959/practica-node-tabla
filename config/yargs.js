// Con esto requerimos el paquete de yargs y extraemos el argv
const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:false,
                    describe:'Permite imprimir o no la lista de multiplicacion'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                      throw new Error("La base debe ser un numero")
                    } else {
                      return true 
                    }
                  })
                  .argv;

module.exports = argv;