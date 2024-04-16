const express = require("express");
const router = express.Router();
const Car = require("../models/car.model");
const carController = require("../controllers/car.controller");



router.get("/allcars", carController.getAllCars);
router.get("/", carController.hello)
router.post("/results", carController.getResultsCars)

module.exports = router;