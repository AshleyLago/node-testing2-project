exports.up = async function(knex) {
    await knex.schema
    .createTable('movies', tbl => {
        tbl.increments('movie_id')
        tbl.string('movie_name', 64).notNullable()
        tbl.string('director_name', 32).notNullable()
        tbl.integer('release_date', 4).notNullable()
        tbl.integer('box_office').notNullable()
        tbl.integer('run_time')
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('movies')
};