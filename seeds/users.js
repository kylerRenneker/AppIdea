
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Kyler', last_name: "Renneker", username: "Krenneker", password: "Password1!" },
        { id: 2, first_name: 'Steve', last_name: "Jobs", username: "SJobs", password: "Password1!" },
        { id: 3, first_name: 'Bob', last_name: "Siffen", username: "SiffenOff", password: "Password1!" }
      ]);
    });
};
