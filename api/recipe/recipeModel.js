const db = require('../../data/db-config')
module.exports = {
    getAllRec() {
        return db('recipes')
    },

    getRecipeById(id) {
        return db('recipes')
            .where('recipe_id', id)
            .first()
    }
}
