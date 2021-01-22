// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    addProject,
    getProjects,
}

function addProject(data) {
    return db('projects')
    .insert(data, 'id')
    .then(ids => ({ id: ids[0], ...data}))
}

function getProjects() {
    return db('projects as p')
    .select('p.project_name', 'p.project_description', 'p.project_completed')
}