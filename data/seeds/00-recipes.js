exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {
      "recipe_id" : 1,
      "recipe_name": "Spaghetti Bolognese",
      "created_at": "2021-01-01 08:23:19.120"
    },
    {
      "recipe_id" : 2,
      "recipe_name": "Roasted Potatoes and Green Beans",
      "created_at": "2021-12-18 18:23:19.120"
    }
  ]);
};
