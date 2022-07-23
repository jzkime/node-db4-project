exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').truncate()
  await knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 0.014},
    {step_id: 1, ingredient_id: 2, quantity: 0.12},
    {step_id: 2, ingredient_id: 1, quantity: 3.2},
  ]);
};
