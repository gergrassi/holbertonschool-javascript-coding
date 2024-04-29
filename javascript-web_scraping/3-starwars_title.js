#!/usr/bin/node

const request = require('request');

const movieId = process.argv[1];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);
  console.log(movie.title);
});