const express = require('express');
const router = express.Router();
const recMod = require('./recipeModel')
const { validateRecipeId } = require('./recipeMiddleware')

router.get('/', (req, res, next) => {
    recMod.getAllRec()
        .then(rec => res.json(rec))
})

router.get('/:recipe_id', validateRecipeId, (req, res, next) => {
    try {
        res.json(req.recipe)
    } catch(err) {
        next(err)
    }
})

module.exports = router;
