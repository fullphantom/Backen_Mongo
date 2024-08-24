const Cita = require('../modelo/Cita');

// funcion agregar clientes

exports.agregarCitas = async(req, res) => {
    try {
        let citas;
        citas = new Cita (req.body)
        await citas.save();
        res.json(citas);


        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar una cita');
        
    }
}

// funcion buscar citas
 exports.mostrarCitas = async (rep,res)=>{
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar las citas');
    }
 }
  
 //funcion buscar una cita

 exports.BuscarCita = async(req,res)=>{
    try {
        let citas = await Cita.findById(req.params.id);
        if(!citas){
            res.status(400).send({msg: 'la cita no se encuentra por id'});

        }else{
            res.json(citas);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar una cita');
    }
 }

 // funcion modificar cita con metodo put

 exports.modificarCitas = async(req,res)=>{
    try {
        const citas = await Cita.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!citas){
            res.status(404).send('cita no encontrada');

        }else {
        res.json(citas);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar una cita');
    }
 }

 // funcion modificar cita con metodo patch

 exports.editarCitas = async(req,res)=>{

    try {
        const citas = await Cita.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!citas){
            return res.status(404).send('la cita no existe');
        }else{
            res.json(citas);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar una cita');
    }
 }

 // funcion eliminar cita con metodo delete

 exports.eliminarCitas = async(req,res) => {
    try {
        let citas = await Cita.findById({_id: req.params.id});
        if(!citas){
            res.atatus(404).send('la cita no se encuentra por ID');
            return
        }
        await Cita.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'la cita fue eleminada con exito'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar una cita');
    }
 }