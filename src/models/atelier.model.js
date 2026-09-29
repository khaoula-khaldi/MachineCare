const mongoose = require("mongoose");

const atelierSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },

        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Atelier = mongoose.model("Atelier", atelierSchema);

module.exports = Atelier;