exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table
      .increments('id')
      .primary()
      .unsigned()
      .notNullable()
    table
      .string('code')
      .unique()
      .notNullable()
    table.string('name').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
}
