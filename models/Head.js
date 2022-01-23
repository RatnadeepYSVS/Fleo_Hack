const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalsales: {
        type: String,
        required: true
    },
    targetsales: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
    },
    color: {
        type: String
    },
    stats: {
        type: String
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }
})
module.exports = mongoose.model('Category', categorySchema)