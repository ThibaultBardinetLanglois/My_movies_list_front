import { useState, useEffect } from "react";

import './home.scss';
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/SliderMovie/Slider";

import { 
  getAllMoviesByPopularity,
  getAllMoviesByBestRating,
  getAllMoviesByTrend 
} from "../../services/movies.service";

import {
  getAllSeriesByTrend
} from "../../services/tv-show.service";

import { IReceivedMovie } from "../../types/movie.type";


const Home = () => {
  const [bannerMovie, setBannerMovie] = useState<IReceivedMovie>();

  const [moviesByTrend, setMoviesByTrend] = useState<IReceivedMovie[] | undefined>([]);
  const [moviesByPopularity, setMoviesByPopularity] = useState<IReceivedMovie[] | undefined>([]);
  const [moviesByBestRating, setMoviesByBestRating] = useState<IReceivedMovie[] | undefined>([]);
  
  const [seriesByTrend, setSeriesByTrend] = useState<any[]>([]);
  // const [seriesByBestRating, setSeriesByBestRating] = useState<any[]>([]);
  // const [seriesByPopularity, setSeriesByPopularity] = useState<any[]>();
  

  const retrieveMoviesByBestRating = async (): Promise<void> => {
    const movies = await getAllMoviesByBestRating();
    if (movies !== null && movies?.status === "OK") {
      setMoviesByBestRating(movies.data);
    }
  }

  const retrieveMoviesByTrend = async (): Promise<void> => {
    const movies = await getAllMoviesByTrend();
    if (movies !== null && movies?.status === "OK") {
      setMoviesByTrend(movies.data);
    }
  }

  const retrieveMoviesByPopularity = async (): Promise<void> => {
    const movies = await getAllMoviesByPopularity();
    if (movies !== null && movies?.status === "OK") {
      setMoviesByPopularity(movies.data);
    }
  }

  const retrieveSeriesByTrend = async (): Promise<void> => {
    const series = await getAllSeriesByTrend();
    setSeriesByTrend(series.data);
  }

  const getMovieForBanner = async () => {
    let movies: IReceivedMovie[] = [];
    const retrievedMovies = await getAllMoviesByTrend();
    movies = retrievedMovies.data;
    let moviesLength = 0;
    if (movies !== undefined) {
      moviesLength = movies.length;
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

    retrieveMoviesByBestRating();
    retrieveMoviesByTrend();
    retrieveMoviesByPopularity();

    retrieveSeriesByTrend();
    
  }, [])

  return (
    <div className="home-page">
      {bannerMovie !== undefined ? (
        <Banner item={bannerMovie} />
      ) : (
        <p>No banner for this time</p>
      )}
      <h3>Hello in Home</h3>
      <div className="movies-by-trend">
        {moviesByTrend ? (
          <Slider items={moviesByTrend} classname='slider-movies-by-trend' />
        ) : (
          <p>Waiting for movies by best rating</p>
        ) }
      </div>
    </div>
  )
}

export default Home
