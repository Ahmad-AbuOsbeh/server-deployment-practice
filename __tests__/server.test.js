'use strict';

xtest('math test', () => {
  //   expect(8 / 2).toEqual(4);
  expect(8 / 2).toBe(4);
});

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API tests', () => {
  //   test('404 invaild requests ', async () => {
  //     const response = await request.get('/invalid');
  //     expect(response.status).toBe(404);
  //   });
  it('404 invaild requests ', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toEqual(404);
  });

  it('500 server problem(Errors) ', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

  it('good requests ', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
