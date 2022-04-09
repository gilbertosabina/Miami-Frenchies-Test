import React, { useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import frenchie1 from '../../assets/slide/1.jpg';
import frenchie2 from '../../assets/slide/2.jpg';
import frenchie3 from '../../assets/slide/3.jpg';
import frenchie4 from '../../assets/slide/4.jpg';
import frenchie5 from '../../assets/slide/5.jpg';
import frenchie6 from '../../assets/slide/6.jpg';
import frenchie7 from '../../assets/slide/7.jpg';
import frenchie8 from '../../assets/slide/8.jpg';
import frenchie9 from '../../assets/slide/9.png';
import './MobileSlider.scss';

const MobileSlider = () => {
  
  const frenchies = [frenchie1, frenchie2, frenchie3, frenchie4, frenchie5, frenchie6, frenchie7, frenchie8, frenchie9];
  const [indexFrenchie, setIndexFrenchie] = useState(0);

  const handleSlide = (direction) => {
      
    if(direction === 'left' && indexFrenchie === 0){
        setIndexFrenchie(8);
        return;
    } 
    if(direction === 'right' && indexFrenchie === 8){
        setIndexFrenchie(0);
        return;
    } 

    if(direction === 'left') {
        setIndexFrenchie(indexFrenchie - 1);
    }
    else {
        setIndexFrenchie(indexFrenchie + 1);
    }
  }


  return (
    <div className='mobile-slider'>
        <div className='mobile-slider-frenchies'>
            <div style={{display: 'flex'}}>
                <BsChevronLeft onClick={() => handleSlide('left')}/>
            </div>
            <img 
                id={`frenchie-${indexFrenchie}`}
                className='mobile-slider-img' 
                src={frenchies[indexFrenchie]} alt='frenchie' 
            />
            <div style={{display: 'flex'}}>
                <BsChevronRight onClick={() => handleSlide('right')}/>
            </div>
        </div>
        <div className='mobile-slider-labels'>
            {
               frenchies.map(() => (
                   <label for={`frenchie-${indexFrenchie}`}></label>
               ))
            }
        </div>
    </div>
  )
}

export default MobileSlider