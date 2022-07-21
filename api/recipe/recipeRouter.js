const express = require('express');
const router = express.Router();
const recMod = require('./recipeModel')

router.get('/', (req, res, next) => {
    recMod.getAllRec()
        .then(rec => res.json(rec))
})

module.exports = router;
