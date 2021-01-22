// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    addResource,
    getResources
}

function addResource(resource) {
    return db('resources')
    .insert(resource, 'id')
    .then(ids => ({ id: ids[0], ...resource}))
}

function getResources() {
    return db('resources')
}