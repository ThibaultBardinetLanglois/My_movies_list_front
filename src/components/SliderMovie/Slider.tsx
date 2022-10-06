import './slider.scss';

import { useEffect, useState } from "react";
import config from '../../config';

import SliderItem from "./SliderItem/SliderItem";

const SliderMovie = ({ items, classname }: any) => {
  const [switchRight, setSwitchRight] = useState<boolean>(false);
  const [switchLeft, setSwitchLeft] = useState<boolean>(false);
  const slider = document.querySelector(`.${classname}`);
  let scrollPerClick: number = 0;
  let imgPadding: number = 3;
  let scrollIndex: number = 0;

  const sliderScrollLeft = () => {
    console.log("left");
    // if (slider !== null) {
    //   slider.scrollTo({
    //     top: 0,
    //     left: (scrollIndex -= scrollPerClick),
    //     behavior:'smooth'
    //   })

    // }
  
    // if (scrollIndex < 0) {
    //   scrollIndex = 0;
    // }
    // let distance = 100;
    // slider.style.transform = `translateX(${distance}px)`;
  }


  const sliderScrollRight = () => {
    console.log("right");
    // if (slider !== null) {
    //   if (scrollIndex < slider.scrollWidth - slider.clientWidth) {
        
    //     slider.scrollTo({
    //       top: 0,
    //       left: ((scrollIndex += scrollPerClick) * 4),
    //       behavior:'smooth'
    //     })
    //   } else {
    //     scrollIndex = 0;
    //   }
    //   else {
    //     slider.scrollTo({
    //       top: 0,
    //       right: (scrollIndex += scrollPerClick),
    //       behavior:'smooth'
    //     })
    //     scrollIndex = 0
    //   }
    //   let distance = 100;
    //   slider.style.transform = `translateX(-${distance}px)`
    
    //   console.log("Scroll index =>", scrollIndex)
    // }
  }

  const showItemsData = (itemsData: any) => {
    console.log("movies =>", itemsData);

    if (slider !== null) {
      itemsData.map((cur: any, index: any) => {
        return slider.insertAdjacentHTML(
          "beforeend",
          `<img class="img-${index} slider-img" src="${config.tmdb_api.baseImageUrl}/${cur.backdrop_path}" />`
        )
      })
    }
  }


  useEffect(() => {
    showItemsData(items);
    console.log("items in slider, classname =>", items, classname);

    console.log("left :", switchLeft, "right :", switchRight)
  }, [switchLeft, switchRight])

  return (
    <div className="caroussel-wrapper">
      <div className="caroussel-box">
        
      </div>

      <span className="switchLeft" onClick={sliderScrollLeft} >&#8249;</span>
      <span className="switchRight" onClick={sliderScrollRight}>&#8250;</span>
    </div>
  )
}

export default SliderMovie
