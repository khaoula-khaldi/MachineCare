const mongoose = require("mongoose");

const panneSchema = new mongoose.Schema(
    {
        machine_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Machine",
            required: true
        },

        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        description: {
            type: String,
            required: true
        },

        statut: {
            type: String,
            enum: ["ouvert", "en_cours", "resolu"],
            required: true,
            default: "ouvert"
        },

        note_resolution: {
            type: String
        },

        date_resolution: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const Panne = mongoose.model("Panne", panneSchema);

module.exports = Panne;