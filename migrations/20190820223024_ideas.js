
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function ())
};

exports.down = function (knex) {

};
