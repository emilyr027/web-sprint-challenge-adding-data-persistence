
exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { resource_name: 'a resource', resource_description: 'abc' },
    { resource_name: 'a good resource', resource_description: 'abc' }
  ])
}