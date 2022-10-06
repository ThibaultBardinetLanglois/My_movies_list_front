import './movies.scss';
import Banner from "../../components/Banner/Banner";

import { useState, useEffect } from "react";

import { getAllMoviesByBestRating } from "../../services/movies.service";

import { IReceivedMovie } from "../../types/movie.type";

const Movies = () => {
  const [bannerMovie, setBannerMovie] = useState<IReceivedMovie>();

  const getMovieForBanner = async () => {
    let movies: IReceivedMovie[] | undefined = [];
    const retrievedMovies = await getAllMoviesByBestRating();
    movies = retrievedMovies.data;
    console.log("MOVIES =>", movies)
    let moviesLength = 0;
    if (movies !== undefined && movies.length > 0) {
      moviesLength = movies.length;
    } else {
      return null;
    }

    let movie = undefined;
    
    while (movie === undefined) {
      const index = Math.floor(Math.random() * moviesLength - 1);
      // We have to be careful because sometimes the index can return a object undefined;
      movie = movies[index];
    }
    
    setBannerMovie(movie);
  }


  useEffect(() => {
    getMovieForBanner();
    
    
  }, [])

  console.log("banner movie =>", bannerMovie)
  return (
    <div className='movies-page'>
      {bannerMovie !== undefined ? (
        <Banner item={bannerMovie} />
      ) : (
        <p>No banner for this time</p>
      )}
    </div>
  )
}

export default Movies
