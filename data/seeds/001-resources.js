
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource1', description: 'r1 description'},
        {name: 'resource2', description: 'r2 description'},
        {name: 'resource3', description: 'r3 description'},
      ]);
    });
};
