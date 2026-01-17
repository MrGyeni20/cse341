const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 Contacts API',
    description: 'API for managing contacts - Week 2 Project'
  },
  host: 'localhost:8080',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./main-server.js'];  // ← Points to main-server.js

swaggerAutogen(outputFile, endpointsFiles, doc);