const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name_id: {
        type: String,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)