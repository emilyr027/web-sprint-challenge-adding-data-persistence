
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable().unique()
      tbl.string('project_description')
      tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.string('resource_description')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_description').notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed').notNullable().defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
      })
      .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
