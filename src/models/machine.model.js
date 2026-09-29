const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema(
    {
        reference: {
            type: String,
            required: true,
            unique: true
        },

        nom: {
            type: String,
            required: true
        },

        atelier_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Atelier",
            required: true
        },

        etat: {
            type: String,
            enum: ["dispo", "en_maintenance", "hors_service"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;