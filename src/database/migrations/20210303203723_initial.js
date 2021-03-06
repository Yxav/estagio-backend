
exports.up = function (knex) {

  return knex.schema.createTable('navers', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.date('birthdate').notNullable().defaultTo(knex.raw('now()'));
      table.date('admission_date').notNullable().defaultTo(knex.raw('now()'));
      table.string('job_role').notNullable();

    })
    .createTable('projects', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
    })
    .createTable('navers_projects', table => {
      table.integer('naver_id').unsigned()
      table.foreign('naver_id')
        .references('navers.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.integer('project_id').unsigned()
      table.foreign('project_id')
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('navers_projects')
    .dropTable('navers')
    .dropTable('projects')
};
