const db = require('../../data/db-config')
module.exports = {
    getAllRec() {
        return db('recipes')
    }
}