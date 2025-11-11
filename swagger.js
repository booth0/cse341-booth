import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts with MongoDB'
  },
  tags: [
    {
      name: 'Contacts',
      description: 'Contact management endpoints'
    }
  ],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990-01-01'
    },
    ContactResponse: {
      _id: '507f1f77bcf86cd799439011',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990-01-01T00:00:00.000Z',
      __v: 0
    },
    CreateContactResponse: {
      id: '507f1f77bcf86cd799439011'
    },
    Error: {
      message: 'Error message'
    }
  }
};

const outputFile = './swagger.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);

