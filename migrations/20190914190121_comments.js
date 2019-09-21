
exports.up = function (knex) {
    return knex.schema
        .createTable('comments', function (table) {
            table.increments('id').primary()
            table.string('text', 2055).notNullable
            table.integer('user_id').references('users.id')
            table.integer('idea_id').references('ideas.id')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('comments')
};
