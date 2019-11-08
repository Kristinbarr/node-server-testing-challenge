exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
