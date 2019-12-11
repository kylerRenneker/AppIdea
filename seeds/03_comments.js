
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { text: 'this is super cool man, I would love to help implement', user_id: 4, idea_id: 2 },
        { text: 'heck yeah, I can see that being an awsome app', user_id: 5, idea_id: 3 },
        { text: 'That will never work man', user_id: 9, idea_id: 3 },
        { text: 'How would you get to an MVP?', user_id: 7, idea_id: 1 },
        { text: 'I could totally be your designer for this. I love the Idea!', user_id: 2, idea_id: 2 },
      ]);
    });
};
