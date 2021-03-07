const List = require('../models/list')

module.exports = {
    async create(req, res){
        const list = await List.create(req.body)
        return res.json(list)
    },

    async findAll(req, res){
        const lists = await List.find({})
        return res.json(lists)
    },

    async findById(req, res){
        try{
            const list = await List.findById(req.params.id)
            return res.json(list)
        } catch (error) {
            return res.json(error)
        }
    },

    async deleteById(req, res){
        try {
            await List.findByIdAndDelete(req.params.id)
            return res.json({menssage: 'deletado com sucesso'})
        } catch (error) {
            return res.json(error)
        }
    },

    async updateById(req, res){
        try {
            const list = await List.findByIdAndUpdate(req.params.id, req.body, {new: true})
            return res.json(list)
        } catch (error) {
            return res.json(error)
        }
    }
}