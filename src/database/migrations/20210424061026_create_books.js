exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('author').notNullable();
    table.string('description');
    table.string('cover');
    table.dateTime('created').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('books');
};
