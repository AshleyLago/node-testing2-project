const db = require('../../data/db-config');
const Movies = require('./model');

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

describe('Movies Model Tests', () => {
  test('should initialize database properly', async () => {
    const movies = await Movies.getAll();
    expect(movies).toB      
  });
})

describe('Movies Model Tests', () => {
  test('should initialize database properly', async () => {
    const movies = await Movies.getAll();
    expect(movies).toEqual([]); // Assuming an empty database initially
  });
})

describe('Movies Model Tests', () => {
  test('should initialize database properly', async () => {
    const movies = await Movies.getAll();
    expect(movies).toEqual([]); // Assuming an empty database initially
  });
})

describe('Movies Model Tests', () => {
  test('should initialize database properly', async () => {
    const movies = await Movies.getAll();
    expect(movies).toB
})