const Car = require("../models/car.model");
const fs = require("fs");

exports.getAllCars = (req, res, next) => {
    Car.find()
        .then(cars => res.status(200).json(cars))
        .catch(error => res.status(400).json({ error }));
};
exports.getResultsCars = async(req, res, next) => {
    try {
        console.log(req.body)
        const filters = {
            Couleur: req.body.Couleur,
            Energie: req.body.Energie,
            Modele: req.body.Modele,
            Marque: req.body.Marque,
            Annee: req.body.Annee,
        };
        const orQuery = [];
        for (const key in filters) {
            if (filters[key]) {
                const fieldQuery = {};
                fieldQuery[key] = filters[key];
                orQuery.push(fieldQuery);
            }
        }
        const query = orQuery.length ? { $or: orQuery } : {};

        // Execute the query using Mongoose find with $or and $sort
        const cars = await Car.find(query).sort({ matchingFields: -1 }).limit(12);

        res.json(cars);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};




exports.hello = (req, res) => {
    res.send('hello REST API');
    console.log('hello')
}