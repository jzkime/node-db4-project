const db = require('../../data/db-config')
module.exports = {
    getAllRec() {
        return db('recipes')
    },

    create(r) {
        return db('recipes')
            .insert(r)
            .then(async i => {
                const re = await this.getRecipeById(i[0])
                return {...re, recipe_id: i[0]};
            })
    },

    findName(name) {
        return db('recipes')
            .where({recipe_name: name})
            .then(i => i)
    },
    async getRecipeById(rec_id) {
        const arr = await db('recipes as re')
            .leftJoin('steps as st', 'st.recipe_id', 're.recipe_id')
            .leftJoin('step_ingredients as si', 'si.step_id', 'st.step_id')
            .leftJoin('ingredients as in', 'in.ingredient_id', 'si.ingredient_id')
            .where('re.recipe_id', rec_id)
        const { created_at, recipe_id, recipe_name } = arr[0];
        let num = 1;
        return ({
            recipe_id,
            recipe_name, 
            created_at,
            steps: arr
                .filter(item => item.step_id !== null)
                .map(item => {
                    if(item.step_id === num) {
                        num += 1
                        const send = ({
                            step_number: item.step_number,
                            step_id: item.step_id,
                            step_instructions: item.step_instructions,

                            ingredients: arr
                                .filter(it => it.ingredient_id !== null && it.step_id === item.step_id)
                                .map(item => ({
                                    ingredient_id: item.ingredient_id,
                                    ingredient_name: item.ingredient_name,
                                    quantity: item.quantity
                                }))
                            })
                            return send
                        };
            })
            
        })
    }


}
