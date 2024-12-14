const db = require('../../data/db-config');
const Movies = require('./model');

const newMovie = {
  movie_name: "WALL-E", 
  director_name: "Andrew Stanton", 
  release_date: "June 27, 2008", 
  box_office: 532500000
}

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy(); // Close database connection after tests
});

describe('[A] getAll', () => {
  test('  [1] Returns the original movies', async () => {
    const result = await Movies.getAll()
    expect(result).toHaveLength(3)
  })
})

describe('[B] getById', () => {
  test('  [2] Returns the correct movie', async () => {
    const result = await Movies.getById(1)
    expect(result.movie_name).toBe("No Country for Old Men")
  })
})

describe('[C] add', () => {
  test('  [3] Succesfully adds the movie', async () => {
    await Movies.add(newMovie)
    const result = await Movies.getById(4)
    expect(result.movie_name).toBe("WALL-E")
  })
})