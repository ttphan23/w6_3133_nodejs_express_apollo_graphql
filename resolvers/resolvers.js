import MovieModel from '../models/movie.js';

// Resolvers define the technique for fetching the types defined in the schema./

const movieResolvers = {

  Query: {

    // a) get all movies
    getAllMovies: async () => {
      return await MovieModel.find();
    },

    // b)Get movie by ID
    getMovieById: async (_, { id }) => {
      return await MovieModel.findById(id);
    },

    // c)Get movies by Director name using static method
    getMoviesByDirector: async (_, { director_name }) => {
      return await MovieModel.findByDirector(director_name);
    },
  },

  Mutation: {

    // a) Insert new movie
    addMovie: async (_, { movie }) => {
      const newMovie = new MovieModel(movie);
      return await newMovie.save();
    },

    // b) update movie
    updateMovie: async (_, { id, movie }) => {
      return await MovieModel.findByIdAndUpdate(id, movie, { new: true });
    },

    // c)delete movie By ID
    deleteMovieById: async (_, { id }) => {
      const deleted = await MovieModel.findByIdAndDelete(id);
      return deleted ? true : false;
    }
  }
};

export default movieResolvers;