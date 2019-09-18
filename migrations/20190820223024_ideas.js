
exports.up = function (knex) {
    return knex.schema
        .createTable('ideas', function (table) {
            table.increments('id').primary()
            table.string('title', 255).notNullable()
            table.string('description', 2000).notNullable()
            table.integer('user_id').references('users.id')
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('ideas')
};
