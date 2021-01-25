// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    addTask,
    getTasks,
}

function addTask(data) {
    // return db('tasks').insert(data)
    return db('tasks')
    .insert(data, 'id')
    .then(ids => ({ id: ids[0], ...data}))
}

function getTasks() {
    return db('tasks as t')
        .innerJoin('projects as p', 'p.id', 't.project_id')
        .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed' )
    }