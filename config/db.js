const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        const dbUri = process.env.DB_MONGO //verificar qque la variable de entorno este bien escrita
        if(!dbUri){
            throw new Error('No se ha definido la variable de entorno DB_MONGO')
        }
        await mongoose.connect(dbUri, {
        });
        console.log('Conexión exitosa con la base de datos de mongoDB');
    } catch (error) {
        console.log('Error al conectar con la base de datos de mongoDB');
        process.exit(1);
        
    }
};

module.exports = conectarDB;