import React from 'react';
import './About.scss';

import badge from '../../assets/elipse.png';

const About = () => {
  return (
    <div id='about'> 
        <div className='about-back'>
            <div className='about-card'>
                <div className='about-title'>
                    <span >About Section</span>
                </div>
                <div className='about-info'>
                    <p style={{margin: '0'}}>Miami Frenchie Club is a collection of 10,000 unique NFTs randomly 
                        generated on the Ethereum Blockchain. Frenchies are outfitted with 
                        over 100 different characteristics, unique utilities and
                        popular NFT traits. See our roadmap below 
                        and come party with us in our discord! 
                    </p>
                </div>
            </div>
        </div>
        <img src={badge} className='badge' alt='badge'/>
    </div>
  )
}

export default About;