
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        { id: 1, title: 'TheCatApp', description: 'This is an app about a cat. This is how it will work', user_id: 2 },
        { id: 2, title: 'TheCatApp', description: 'This is an app about a cat. This is how it will work', user_id: 1 },
        { id: 3, title: 'TheCatApp', description: 'This is an app about a cat. This is how it will work', user_id: 2 }
      ]);
    });
};
