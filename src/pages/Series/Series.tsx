import './series.scss';
import Banner from "../../components/Banner/Banner";

import { useState, useEffect } from "react";

import { getAllSeriesByTrend } from '../../services/tv-show.service';

import { IReceivedMovie } from "../../types/movie.type";

const Series = () => {
  const [bannerSerie, setBannerSerie] = useState<any>();

  const getSerieForBanner = async () => {
    let series: IReceivedMovie[] | undefined = [];
    const retrievedSeries = await getAllSeriesByTrend();
    series = retrievedSeries.data;
    console.log("SERIES =>", series)
    let seriesLength = 0;
    if (series !== undefined && series.length > 0) {
      seriesLength = series.length;
    } else {
      return null;
    }

    let serie = undefined;
    
    while (serie === undefined) {
      const index = Math.floor(Math.random() * seriesLength - 1);
      // We have to be careful because sometimes the index can return a object undefined;
      serie = series[index];
    }
    
    setBannerSerie(serie);
  }

  useEffect(() => {
    getSerieForBanner();
    
    
  }, [])

  console.log("banner serie =>", bannerSerie)
  return (
    <div className='series-page'>
      {bannerSerie !== undefined ? (
        <Banner item={bannerSerie} />
      ) : (
        <p>No banner for this time</p>
      )}
    </div>
  )
}

export default Series
