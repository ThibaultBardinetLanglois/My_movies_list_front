import axios from "axios";
import config from "../config";

const apiKey = config.tmdb_api.key;
const tmdbBaseUrl = config.tmdb_api.base_url;

export const getAllSeriesByPopularity = async (): Promise<any> => {
  try {
    const series = await axios.get(`${tmdbBaseUrl}/trending/tv/day?${apiKey}`);
    return {
      data: series?.data.results,
      statut: 'OK'
    };
  } catch (e) {
    return {
      statut: 'KO'
    };
  }
}

/**
 * Get all moving by best rating
 * @returns {Promise<{data: object[], statut: string}|{statut: string}>}
 */
 export const getAllSeriesByBestRating = async (): Promise<any> => {
  try {
    const series = await axios.get(`${tmdbBaseUrl}/tv/top_rated?${apiKey}`);
    return {
      data: series?.data.results,
      statut: 'OK'
    };
  } catch (e) {
    return {
      statut: 'KO'
    };
  }
};

export const getAllSeriesByTrend = async (): Promise<any> => {
  try {
    const series = await axios.get(`${tmdbBaseUrl}/trending/tv/day?${apiKey}`);
    return {
      data: series?.data.results,
      statut: 'OK'
    };
  } catch (e) {
    return {
      statut: 'KO'
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