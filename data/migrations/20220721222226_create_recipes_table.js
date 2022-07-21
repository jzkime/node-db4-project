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
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('recipes')
    .dropTableIfExists('steps')
};
