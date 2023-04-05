'use strict';

const server = require('./../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the request stataus', () => {
  test('Should post 404 on a bad route', async () => {
    const response = await request.get('/persn?name=Miranda');
    expect(response.status).toEqual(404);
  });

  test('Should post 404 on a bad method', async () => {
    const response = await request.post('/person?name=Miranda');
    expect(response.status).toEqual(404);
  });
  test('Should post 500 if no name in the query string', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });

  test('Should post 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=Miranda');
    expect(response.status).toEqual(200);
  });
});
