const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 Contacts API',
    description: 'API for managing contacts - Week 2 Project',
    version: '1.0.0'
  },
  host: 'cse341-l0tm.onrender.com',  
  schemes: ['https'],             
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts'
    }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./main-server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);