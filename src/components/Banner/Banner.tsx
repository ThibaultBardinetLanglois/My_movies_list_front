import './banner.scss';
import { useState, useEffect }  from 'react';
import { getAllMoviesByTrend } from '../../services/movies.service';

import { IReceivedMovie } from '../../types/movie.type';
import { truncateText } from '../../utils/utils';
import config from '../../config';

const Banner = ({item}: IReceivedMovie | any) => {
  
  console.log("banner item in banner component =>", item)

  

  return (
    <>
      {item !== null ? (
        <div className='banner' style={{
          backgroundImage: `url(${config.tmdb_api.baseImageUrl}${item?.backdrop_path})`
      }}>
          <div className="banner__content">
            <div className="banner__title">
              <h1> { item?.title || item?.name } </h1>
            </div>
            <p className="banner__description">
              { truncateText(item?.overview) }
            </p>
            <div className="banner__buttons">
              <button className='banner__button'>Voir la fiche</button>
              <button className='banner__button'>Plus d'infos</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )
      }
    </>
  )
}

export default Banner
