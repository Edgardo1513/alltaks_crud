

const { BaseError } = require("sequelize");
const AllTalks  = require("../models/alltalks.model");

const getAllTalks = async (req, res) => {    
   
    try {
  
     //TODO Mandar a buscar a todos los usuarios
     const alltalks = await AllTalks.findAll({
         attributes: ["id", "title", "description", "completed"]
       
     });
 
     // TODO Responder al cliente
     res.json(alltalks);
     } catch (error) {
         
         res.status(400).json();
    } 
 };

 const getAllTalksById = async(req, res) => {
    try {
        //TODO obtener el id de la ruta
        const { id } = req.params;
        //TODO realizar la consulta ala base de dato
        const alltalk  = await AllTalks.findByPk(id, {
             attributes: ["id", "title", "description", "completed"]
           
         });
        //TODO Responder al cliente
        res.json(alltalk); 
    } catch (error) {
        res.status(400).json(error);
    }
};

const createAllTalks  = async (req, res) => {    
   
    try {
  
     //TODO obteniendo la información del body
     const newAllTalk = req.body; 
 
     // TODO mandar a crear con la informacion obtenida
     const alltalks = await AllTalks.create(newAllTalk);
    
     // TODO responder que se ha realizado la acción.
    
     res.status(201).send();
 
    } catch (error) {
     
         res.status(400).json(error);
    } 
 };

const updateAllTalks  = async (req, res) => {
    try { 
    //TODO obtener el id del usuario
    const {id} = req.params;
    //TODO obtener el body con la información   
    const {title, description, completed} = req.body;
    //TODO realizar la consulta para actualizar
    const alltalk = await AllTalks.update( 
       { title, description, completed },
       { 
        where: {id},
    });
    res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteAllTalks = async (req, res) => {
    try { 
    //TODO obtener el id de la ruta
    const {id} = req.params;
    //TODO eliminar en la base de datos
    await AllTalks.destroy({ 
        where: {id}, 
    });
    res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getAllTalks,
    getAllTalksById,   
    createAllTalks,
    updateAllTalks,
    deleteAllTalks, 
};

