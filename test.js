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
        assert.strictEqual(res.body.length, 3);
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
  it('delete a developer', function (done) {
    const api = require('./api.js');

    request(api.app)
      .delete('/api/developers/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.strictEqual(res.body.length, 2);
      })
      .expect(200, done);
  });

  it('post a new developer', function (done) {
    const api = require('./api.js');

    request(api.app)
      .post('/api/developers/')
      .set('Accept', 'application/json')
      .send({ name: 'John', email: 'john@salt.dev' })
      .expect('Content-Type', /json/)
      .expect('location', /\/api\/developers\//)
      .expect((res) => {
        assert.strictEqual(res.body.name, 'John');
      })
      .expect(201, done);
  });
  it('patch a developer', function (done) {
    const api = require('./api.js');

    request(api.app)
      .patch('/api/developers/1')
      .set('Accept', 'application/json')
      .send({ name: 'Stefan', email: 'steeeefan@gmail.co' })
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.strictEqual(res.body.name, 'Stefan');
      })
      .expect((res) => {
        assert.strictEqual(res.body.email, 'steeeefan@gmail.co');
      })
      .expect(200, done);
  });
});
