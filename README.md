# Primality
[![Build Status](https://travis-ci.com/jerrytfleung/Primality.svg?branch=master)](https://travis-ci.com/jerrytfleung/Primality) 
[![Coverage Status](https://coveralls.io/repos/github/jerrytfleung/Primality/badge.svg?branch=master)](https://coveralls.io/github/jerrytfleung/Primality?branch=master) 
[![License](https://img.shields.io/github/license/jerrytfleung/primality.svg)](https://github.com/jerrytfleung/Primality/blob/master/LICENSE) 

A complete TDD setup of Node.js + Express server development

## What's in repo?

1. A Node.js + Express server which check if a number is prime or not
2. Unit testing using mocha and chai assertion library
3. Code coverage using nyc, travis, coveralls
4. Travis build configuration
5. Containerize server using docker
6. Auto deployment of docker image to docker hub
7. Auto deployment of server to Heroku

## How does it work?

This microservice server reads the number in the request query and does a primality check of that number. It responses a json indicating the number is a prime or not.

## Deployment

### In [Hekuro](https://www.heroku.com/) environment 
1. Go to https://nodejs-primality.herokuapp.com/primality?number=197 in your browser or by other means
2. The http response is
  {
      "Number": "197",
      "Primality": true
  }
  
### In [Docker](https://www.docker.com/) environment
1. Install docker in your box
2. Execute "Docker run -p 3000:3000 --name primality jerrytfleung/primality"
3. Go to http://localhost:3000/primality?number=197 in your browser or by other means
4. The http response is
  {
      "Number": "197",
      "Primality": true
  }
5. Execute "Docker stop primality" to stop the server
