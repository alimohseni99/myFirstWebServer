const assert = require('assert');
const request = require('supertest');

describe('developer API should have endpoints to', () => {
  it('get all developers', (done) => {
    // arrange
    const api = require('./api.js');

    // act
    request(api.app)
      .get('/api/developers/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
