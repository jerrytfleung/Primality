var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../app')
var should = chai.should()

chai.use(chaiHttp)

describe('/primality?number=', () => {
  it('-13, it should not be a prime number', (done) => {
    var number = -13
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('0, it should not be a prime number', (done) => {
    var number = 0
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('2, it should be a prime number', (done) => {
    var number = 2
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: true
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('9, it should not be a prime number', (done) => {
    var number = 9
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('13, it should be a prime number', (done) => {
    var number = 13
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: true
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('96, it should not be a prime number', (done) => {
    var number = 96
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      }
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('abc, it should be NaN', (done) => {
    var number = 'abc'
    chai.request(server)
    .get('/primality?number=' + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = number + ' is NaN.'
      res.body.should.be.eql(expected);
      done();
    });
  });
});