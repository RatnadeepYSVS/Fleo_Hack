const mongoose = require('mongoose')
exports.connect_db = () => {
    mongoose.connect(process.env.uri, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
        console.log('DB Connected')
    }).catch(e => {
        console.log("Error", e)
    })
}