const Cliente = require('../modelo/Cliente');

// funcion agregar clientes

exports.agregarClientes = async(req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);


        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
        
    }
}

// funcion buscar clientes
 exports.mostrarClientes = async (rep,res)=>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar los clientes');
    }
 }
  
 //buscar un cliente

 exports.BuscarCliente = async(req,res)=>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(400).send({msg: 'el cliente no se encuentra por id'});

        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un clientes');
    }
 }

 // funcion modificar cliente con metodo put

 exports.modificarClientes = async(req,res)=>{
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!clientes){
            res.status(404).send('cliente no encontrado');

        }else {
        res.json(clientes);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un clientes');
    }
 }

 // funcion modificar cliente con metodo patch

 exports.editarClientes = async(req,res)=>{

    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!clientes){
            return res.status(404).send('el cliente no existe');
        }else{
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar un clientes');
    }
 }

 // funcion eliminar cliente con metodo delete

 exports.eliminarClientes = async(req,res) => {
    try {
        let clientes = await Cliente.findById({_id: req.params.id});
        if(!clientes){
            res.atatus(404).send('el cliente no se encuentra por ID');
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'el cliente fue eleminado con exito'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un clientes');
    }
 }