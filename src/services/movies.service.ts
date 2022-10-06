import axios from "axios";
import config from "../config";
import { IApiCall } from "../types/movie.type";

const apiKey = config.tmdb_api.key;
const tmdbBaseUrl = config.tmdb_api.base_url;

export const getAllMoviesByPopularity = async (): Promise<any> => {
  try {
    const movies = await axios.get(`${tmdbBaseUrl}/movie/popular?sort_by=popularity.desc&${apiKey}&&language=fr`);
    return {
      data: movies?.data.results,
      status: 'OK'
    };
  } catch (e) {
    return {
      status: 'KO'
    };
  }
  
}

/**
 * Get all moving by best rating
 * @returns {Promise<{data: IreceivedMovie[], statut: string}|{statut: string}>}
 */
 export const getAllMoviesByBestRating = async (): Promise<IApiCall> => {
  try {
    const movies = await axios.get(`${tmdbBaseUrl}/movie/top_rated?${apiKey}&language=en-US&page=1`);
    return {
      data: movies?.data.results,
      status: 'OK'
    };
  } catch (e) {
    return {
      status: 'KO'
    };
  }
};

export const getAllMoviesByTrend = async (): Promise<any> => {
  try {
    const movies = await axios.get(`${tmdbBaseUrl}/trending/movie/day?${apiKey}&&language=fr`);
    return {
      data: movies?.data.results,
      status: 'OK'
    };
  } catch (e) {
    return {
      status: 'KO'
    };
  }
}

// export const create = async (wilder: any) => {
//   return new Promise((resolve, reject) => {
//     axios.post(`${TMDB_API_URL}`, wilder)
//       .then(user => resolve(user.data))
//       .catch(err => reject(err))
//   })
// }

// export const update = async (id: number | undefined, wilder: any) => {
//   return new Promise((resolve, reject) => {
//     axios.put(`${TMDB_API_URL}/${id}`)
//       .then(user => resolve(user.data))
//       .catch(err => reject(err))
//   })
// }

// export const deleteWilder = async (id: number) => {
//   return new Promise((resolve, reject) => {
//     axios.delete(`${TMDB_API_URL}/${id}`)
//       .then(response => resolve(response.data))
//       .catch(err => reject(err))
//   })
// }