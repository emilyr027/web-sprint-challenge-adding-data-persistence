
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { task_description: 'task descr', task_notes: 'lots to do', task_completed: false, project_id: 1 },
    { task_description: 'task description again', task_notes: 'wow, it is a lot', task_completed: false, project_id: 2 }
    
  ])
}