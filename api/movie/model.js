const db = require('../../data/db-config')

const getAll = () => {
  return db('movies')
}

const getById = (movie_id) => {
  return db('movies')
    .where('movie_id', movie_id)
    .first()
}

const add = async(movie) => {
  const [movie_id] = await db('movies')
    .insert(movie)
  return getById(movie_id)
}

module.exports = {
  getAll,
  getById,
  add,
}