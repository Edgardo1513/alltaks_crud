
const express = require("express");
const { Router } = require("express");
const { 
    getAllTalks,
    getAllTalksById, 
    createAllTalks, 
    updateAllTalks, 
    deleteAllTalks 
} = require('../controllers/alltalks.controllers')
const router = Router();


 //************** CRUD ***************/

//! ************ READ **************/

router.get('/alltalks', getAllTalks); 

 router.get('/alltalks/:id', getAllTalksById );



//! *********** CREATE **************/

router.post('/alltalks', createAllTalks);



 //! ************* UPDATE **********/

router.put('/alltalks/:id', updateAllTalks);



//! ************* DELETE **********/

router.delete('/alltalks/:id', deleteAllTalks);


module.exports = router;