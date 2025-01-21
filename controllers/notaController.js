const Nota = require('../models/Nota');


exports.crearNota = async(req, res) =>{
    try {
        let data_nota = new Nota(req.body);
        await data_nota.save();
        res.send(data_nota);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNotas = async(req, res) => {
    try {
        const data_nota = await Nota.find();
        res.json(data_nota);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNotaPorId = async(req, res) => {
    try {
        const data_nota = await Nota.findById(req.params.id)
        if(!data_nota){
            res.status(404).json({msg: 'Nota no encontrada'});
        }

        res.json(data_nota);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarNota = async (req, res) => {
    try {
        const { titulo, nota } = req.body;
        let data_Nota = await Nota.findById(req.params.id);

        if (!data_Nota) {
            return res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización' });
        }

        // Actualiza los campos
        data_Nota = await Nota.findByIdAndUpdate(
            { _id: req.params.id },
            { titulo, nota }, // Actualiza con los valores del cuerpo de la solicitud
            { new: true } // Devuelve el documento actualizado
        );

        res.json(data_Nota);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunícate con soporte');
    }
};


exports.eliminarNota = async(req, res) => {
    try {
        const data_Nota = await Nota.findById(req.params.id);
        if (!data_Nota) {
            return res.status(404).json({ mensaje: 'No se encontraron coincidencias' });
        }
        await Nota.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Nota eliminada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunícate con soporte');
    }
};



