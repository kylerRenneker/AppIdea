
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Kyler', last_name: "Renneker", username: "Krenneker", password: "Password1!" },
        { first_name: 'Steve', last_name: "Jobs", username: "SJobs", password: "Password1!" },
        { first_name: 'Brittany', last_name: "Siffen", username: "BSiffen", password: "Password1!" },
        { first_name: 'Richard', last_name: "Verio", username: "Richio", password: "Password1!" },
        { first_name: 'Andre', last_name: "Rickters", username: "ARickters", password: "Password1!" },
        { first_name: 'Chris', last_name: "Numan", username: "CNuman", password: "Password1!" },
        { first_name: 'Phil', last_name: "Whisler", username: "Phiwsler", password: "Password1!" },
        { first_name: 'Ashley', last_name: "Krofter", username: "AKroft", password: "Password1!" },
        { first_name: 'Ahmed', last_name: "Alleyfredo", username: "AFredo11", password: "Password1!" },
      ]);
    });
};
