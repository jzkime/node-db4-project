exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_id: 1, ingredient_name: 'olive oil'},
    {ingredient_id: 2, ingredient_name: 'butter'},
    {ingredient_id: 3, ingredient_name: 'noodles'},
  ]);
};
