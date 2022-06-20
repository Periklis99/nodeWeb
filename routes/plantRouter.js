const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Plant = require('../models/plant.js');


// get all items
router.get('/', function (req, res) {
    Plant.find({}, function (err, plant) {
        if (err) return res.status(500).send("Something is wrong about finding the plants.");
        res.status(200).send(plant);
    });
}); 

// get one item by id
router.get('/:id', function (req, res) {
    Plant.findById(req.params.id, function (err, plant) {
        if (err) return res.status(500).send("Something is wrong about finding the plant.");
        if (!item) return res.status(404).send("No plant found.");
        res.status(200).send(plant);
    });
});

// add item
router.post('/', function (req, res) {
    Plant.create({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description
        }, 
        function (err, plant) {
            if (err) return res.status(500).send("Something is wrong about adding a new plant.");
            res.status(200).send(plant);
        });
});

// update item
router.put('/:id', function (req, res) {
    
    Plant.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, plant) {
        if (err) return res.status(500).send("Something is wrong about updating the plant.");
        res.status(200).send(plant);
    });
});

// delete item
router.delete('/:id', function (req, res) {
    Plant.findByIdAndRemove(req.params.id, function (err, plant) {
        if (err) return res.status(500).send("Something is wrong about deleting the plant.");
        res.status(200).send("Item "+ plant.name +" was deleted.");
    });
});

module.exports = router;