const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if summary is null', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' })
          .then(() => done(new Error('It requires a valid summary')))
          .catch(() => done());
      });
      it('should create new Recipe with name and summary', () => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'Con salsa y queso' })
      });
    });
  });
});
