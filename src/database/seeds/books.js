exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { name: 'rowValue1', author: 'author', description: 'description' },
        { name: 'rowValue2', author: 'author', description: 'description' },
        { name: 'rowValue3', author: 'author', description: 'description' },
      ]);
    });
};
