
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        { title: 'TheCatApp', description: 'This is an app about a cat. This is how it will work', user_id: 2 },
        { title: 'DonutMe', description: 'This app is all about donuts, fans of donuts, and where you can get said donuts.', user_id: 1 },
        { title: 'SayYes', description: 'This app is all about saying yes. Just say yes!', user_id: 2 }
      ]);
    });
};
