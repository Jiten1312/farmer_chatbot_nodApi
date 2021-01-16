const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fallbackSchema = new Schema({
    query: {
        type: String,
    },
}, {
    versionkey: false,
    timestamp: true,
});

module.exports = fallback = mongoose.model("fallback", fallbackSchema);