const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const path = '/primality/';
chai.use(chaiHttp);

describe(path, () => {
  it('-13, it should not be a prime number', (done) => {
    const number = -13;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('0, it should not be a prime number', (done) => {
    const number = 0;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('2, it should be a prime number', (done) => {
    const number = 2;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: true
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('9, it should not be a prime number', (done) => {
    const number = 9;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('13, it should be a prime number', (done) => {
    const number = 13;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: true
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('96, it should not be a prime number', (done) => {
    const number = 96;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: false
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('2147483647, it should be a prime number', (done) => {
    const number = 2147483647;
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = {
        Number: number,
        Primality: true
      };
      res.body.should.be.eql(expected);
      done();
    });
  });
  it('abc, it should be NaN', (done) => {
    const number = 'abc';
    chai.request(server)
    .get(path + number)
    .end((err, res) => {
      res.should.have.status(200);
      should.exist(res.body);
      const expected = number + ' is NaN.';
      res.body.should.be.eql(expected);
      done();
    });
  });
});