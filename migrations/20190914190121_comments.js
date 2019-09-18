
exports.up = function (knex) {
    return knex.schema
        .createTable('comments', function (table) {
            table.increments('id').primary()
            table.string('', 255).notNullable
        })
};

exports.down = function (knex) {

};
