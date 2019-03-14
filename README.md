# Primality
[![Build Status](https://travis-ci.com/jerrytfleung/Primality.svg?branch=master)](https://travis-ci.com/jerrytfleung/Primality) 
[![Coverage Status](https://coveralls.io/repos/github/jerrytfleung/Primality/badge.svg?branch=master)](https://coveralls.io/github/jerrytfleung/Primality?branch=master) 
[![License](https://img.shields.io/github/license/jerrytfleung/primality.svg)](https://github.com/jerrytfleung/Primality/blob/master/LICENSE) 

A Node.js application with Docker and Travis CI

What's in repo?

1. Primality Express server
2. Dockerfile example
3. Travis CI configuration example

How it works?

Input
> http://localhost:3000/primality?number=197

Output
> {
      "Number": "197",
      "Primality": true
  }