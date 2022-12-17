const express = require ("express");
const clientSchema = require("../models/cliente");

const router = express.Router();

//create clients
router.post("/clientes", (req, res) => {
    const client = clientSchema(req.body);
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all client 
router.get("/clientes", (req, res) => {
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get client by id
router.get("/clientes/:id", (req, res) => {
    const { id } = req.params;
    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update client by id
router.put("/clientes/:id", (req, res) => {
    const { id } = req.params;
    const { nomb_cliente, telefono, ciudad, calle, numero, estado, fecha_nacimiento } = req.body;
    clientSchema
        .updateOne({ _id: id}, { $set: {nomb_cliente, telefono, ciudad, calle, numero, estado, fecha_nacimiento} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete client by id
router.delete("/clientes/:id", (req, res) => {
    const { id } = req.params;
    clientSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;