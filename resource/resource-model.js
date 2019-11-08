const db = require('../data/dbConfig')

module.exports = {
  findAll,
  findById,
  add,
  remove
}

function findAll() {
  return db('resources')
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
}

async function add(resource) {
  const [id] = await db('resources').insert(resource, 'id')
  return db('resources')
    .where({ id })
    .first()
}

function remove(id) {
  return db('resources')
    .where('id', id)
    .del()
}
