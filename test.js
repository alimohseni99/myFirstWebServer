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
      .expect((res) => {
        assert.strictEqual(res.body.length, 2);
      })
      .expect(200, done);
  });

  it('get first developers', (done) => {
    const api = require('./api.js');

    request(api.app)
      .get('/api/developers/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.strictEqual(res.body.id, 1);
      })
      .expect(200, done);
  });
});
