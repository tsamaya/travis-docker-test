const server = require('../server');
const hippie = require('hippie');
hippie.assert.showDiff = true;

describe('Server tests', () => {
  it('ping', (done) => {
    hippie(server)
      .get('/ping')
      .expectStatus(200)
      .expectBody('Healthy!')
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('/sum 12 13', (done) => {
    hippie(server)
      .json()
      .get('/sum')
      .qs({ a: 13, b: 12 }) // middle of Germany
      .expectStatus(200)
      .expectBody({ sum: 25 })
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });
});
