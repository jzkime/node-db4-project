exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name')
            .notNullable()
            .unique()
        tbl.datetime('created_at');
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number')
            .notNullable();
        tbl.string('step_instructions')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 200)
            .unique()
    })
    .createTable('step_ingredients', tbl => {
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
        tbl.integer('ingredient_id')
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
        tbl.decimal('quantity')
            .unsigned()
    })
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
