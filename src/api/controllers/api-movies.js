const superagent = require('superagent');
const prefix = require('superagent-prefix')('https://api.themoviedb.org/3');

const config = require('config');
const data = [];

exports.getMoviesByPageNumber = (pageNumber) => {
  return new Promise((resolve, reject) => {
    superagent
    .get('/movie/popular')
    .query({ api_key: config.get('apiKey') })
    .query({ page: pageNumber })
    .use(prefix)
    .end((err, res) => {
      if(err) {
        console.log(err);
        reject(err);
      }
      if(res.body.results.length) {
        res.body.results.forEach(movie => {
          let releaseDate = new Date(movie.release_date);
          data.push({name: movie.title, year: releaseDate.getFullYear(), imgUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`});
        });
      }
      resolve(data);
    });
  });
}
