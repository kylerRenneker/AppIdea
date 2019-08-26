
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary()
            table.string('first_name', 255).notNullable()
            table.string('last_name', 255).notNullable()
            table.string('username', 255).notNullable()
            table.string('password', 255).notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users')
};
