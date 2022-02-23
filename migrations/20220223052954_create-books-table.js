exports.up = function(knex) {
    return knex.schema.createTable('books', tbl => {
        tbl.increments()
        tbl.text('title').notNullable()
        tbl.text('author')
        tbl.integer('date')
        tbl.blob('thumbnail')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
};