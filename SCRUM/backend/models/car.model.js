const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = Schema({
    Boite: { type: String },
    Energie: { type: String },
    Moteur: { type: String },
    Marque: { type: String },
    Etat: { type: Number },
    Photo: { type: String },
    Prix: { type: Number },
    Couleur: { type: String },
    Kilometrage: { type: Number },
    Modele: { type: String },
    Annee: { type: Number }
}, { collection: 'Cars' });

module.exports = mongoose.model("Car", CarSchema);