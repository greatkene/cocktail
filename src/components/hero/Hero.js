import React, {useState, useEffect} from 'react'
import heroImg from '../../data'
import SliderContent from "./SliderContent";
import Dots from './Dots'
import './slider.css'


const len = heroImg.length - 1;

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={heroImg} />
      
      <Dots
        activeIndex={activeIndex}
        sliderImage={heroImg}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Hero