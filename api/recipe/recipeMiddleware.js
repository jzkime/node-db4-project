const recMod = require('./recipeModel');

module.exports = {
    async validateRecipeId(req, res, next) {
        const { recipe_id } = req.params;
        let recipe = await recMod.getRecipeById(recipe_id);
        if(!recipe) return next({status: 400, message: 'invalid id!'})
        req.recipe = recipe;
        next();
    },
    validateRecipe(req, res, next) {
        const { recipe_name } = req.body;
        if(!recipe_name || recipe_name.trim() === '') return next({status: 400, message: 'invalid name'});
        req.recipe = {
            recipe_name,
            created_at: Date().toString().split('GMT')[0].trim()
        }
        next()
    },
    async validateUniqueName(req, res, next) {
        const [obj] = await recMod.findName(req.recipe.recipe_name);
        if(obj?.recipe_id) return next({status: 400, message: 'name already in use'})
        else next()
    }
}
