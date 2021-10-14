/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanga a la napolitana',
  summary: 'Con salsa y queso'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
  describe('GET /recipes Milanga', () => {
    it('should get 200', () =>
      agent.get('/recipes?name=Milanga').expect(200)
    );
  });
  describe('GET /recipes/WRONG', () => {
    it('should get 404', () =>
      agent.get('/recipes?name=WRONG').expect(404));
  });
});