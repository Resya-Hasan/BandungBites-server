const mongoose = require("mongoose")

const menuItemSchema = new mongoose.Schema({
    name_id: {
        type: String,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    description_id: {
        type: String,
        required: true
    },
    description_en: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        default: "https://imgs.search.brave.com/e42CCtPMaQI-vfMOg6IwSL_fjV_jmz-L-bJY7PtFEUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVh/cnRhbmRjcmFmdHJv/b20uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b29jb21tZXJj/ZS1wbGFjZWhvbGRl/ci02MDB4NjAwLnBu/Zw"
    },
    imagePublicId: {
        type: String,
        default: null
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        default: []
    },
    rating: {
        average: { type: Number, default: 0, min: 0, max: 5 },
        count: { type: Number, default: 0 }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Menu_Item", menuItemSchema)