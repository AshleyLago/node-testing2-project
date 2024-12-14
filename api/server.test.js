const db = require('../data/db-config')
const request = require('supertest')
const server = require('./server')

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


describe('[GET] /movies', () => {
    test('  [1] Responds with 200 Ok', async () => {
        const res = await request(server).get('/api/movies')
        expect(res.status).toBe(200)
    })
    test('  [2] Responds with all movies', async () => {
        const res = await request(server).get('/api/movies')
        expect(res.body).toHaveLength(3)
    })
})

describe('[GET] /movies/:id', () => {
    test('  [3] Responds with 200 Ok', async () => {
        const res = await request(server).get('/api/movies/2')
        expect(res.status).toBe(200)
    })
    test('  [4] Responds with chosen movie', async () => {
        const res = await request(server).get('/api/movies/2')
        expect(res.body.movie_name).toBe("Interstellar")
    })
})

describe('[POST] /movies', () => {
    const newMovie = {
        movie_name: "WALL-E", 
        director_name: "Andrew Stanton", 
        release_date: "June 27, 2008", 
        box_office: 532500000
      }
    test('  [5] Responds with 200 Ok', async () => {
        const res = await request(server).post('/api/movies/').send(newMovie)
        expect(res.status).toBe(201)
    })
    test('  [6] Adds a movie to the database', async () => {
        await request(server).post('/api/movies/').send(newMovie)
        expect(await db('movies')).toHaveLength(4)
    })
    test('  [7] Responds wit the new movie', async () => {
        const res = await request(server).post('/api/movies/').send(newMovie)
        expect(res.body).toMatchObject(newMovie)
    })
})