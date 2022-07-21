const recMod = require('./recipeModel');

module.exports = {
    async validateRecipeId(req, res, next) {
        const { recipe_id } = req.params;
        let recipe = await recMod.getRecipeById(recipe_id);
        if(!recipe) return next({status: 400, message: 'invalid id!'})
        req.recipe = recipe;
        next();
    }
}
