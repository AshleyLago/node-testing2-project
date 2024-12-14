exports.seed = function(knex) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {movie_id: 1, movie_name: 'No Country for Old Men', director_name: 'Joel Coen', release_date: 'November 9, 2007', box_office: 171600000, run_time: 122},
        {movie_id: 2, movie_name: 'Interstellar', director_name: 'Christopher Nolan', release_date: 'October 26, 2014', box_office: 722400000, run_time: null},
        {movie_id: 3, movie_name: 'Mad Max: Fury Road', director_name: 'George Miller', release_date: 'May 15, 2015', box_office: 173800000, run_time: 120},
      ]);
    });
};


/*
No Country for Old Men
  Director: Joel Coen
  Release date: November 9, 2007
  Box office: $171.6 million 171 600 000
  Run time: 122 minutes
Interstellar
  Director: Christopher Nolan 
  Release date: October 26, 2014
  Box office: $722.4 million 722 400 000
  Run time: 
Mad Max: Fury Road
  Director: George Miller
  Release date: May 15, 2015
  Box office: $173.8 million 173 800 000
  Run time: 120 minutes
*/