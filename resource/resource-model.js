const db = require('../data/dbConfig')

module.exports = {
  findAll,
  findById,
  add,
  remove,
};

function findAll() {
  return db('resources').select('id', 'name', 'description')
}

function findById(id) {
  return db('users').where({id}).first()
}

async function add(resource) {
  const [id]  = await db('resources').insert(resource)
  return findById(id)
}

function remove(id) {
  // const removed = await db('resources').remove()
  return db('resources')
  .where('id', id)
  .del()
}
