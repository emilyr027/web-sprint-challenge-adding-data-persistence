
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'Make ToDo App', project_description: 'abc' },
    { project_name: 'Clean closet', project_description: 'abc' }
  ])
}