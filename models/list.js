const mongoose = require('../db/index')

const ListSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    itens:[{name: String, qtd: Number}],
    date:{
        type: Date,
        Default: Date.now
    }
})

const List = mongoose.model('List', ListSchema)

module.exports = List