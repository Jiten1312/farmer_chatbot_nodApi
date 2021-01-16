const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kisanQuerySchema = new Schema({
    sector: {
        type: String,
    },
    category: {
        type: String
    },
    crop: {
        type: String
    },
    query_type: {
        type: String
    },
    query_text: {
        type: String
    },
    response: {
        type: String
    },
    state: {
        type: String
    },
    district: {
        type: String
    },
    block: {
        type: String
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = kisanQuery = mongoose.model("query", kisanQuerySchema);