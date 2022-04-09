
import React from 'react';
import './Roadmap.scss';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

const styleParagraphGreen = {
    backgroundColor: '#add8d2'
}

const styleParagraphWhite = {
    backgroundColor: 'white'
}

const Roadmap = () => {

  return (
    <div id="roadmap" className='roadmap-back'>
        <div className='roadmap-liston'>
            <span>
               Roadmap
            </span> 
        </div>
        <div className='row'>
            <div className='col'>
                <img src={img1} alt='number1' className='numbers'/>
                <div className='card1'>
                    <div className='title'>
                        promote the club
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                        -Create twitter, instagram, discord and website.
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                        -Community giveaways / competitions for whitelist spots.
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                        -List 1/1 for auction, all proceeds go to charity!
                    </div>
                </div>
            </div>
            <div className='col'>
                <img src={img2} alt='number2' className='numbers'/>
                <div className='card2'>
                    <div className='title'>
                        open the club
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                        -Begin minting 10,000 unique frenchies.
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                        -Mint Date TBD.
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                        -Mint Price TBD.
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                        -Delayed revealed, date TBD.
                    </div>
                </div>
            </div>
            
        </div>
        <div className='row'>
            <div className='col'>
                <img src={img3} alt='number3' className='numbers'/>
                <div className='card3'>
                    <div className='title'>
                        the party goes on
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                    -Holders will have exclusive access to live events worldwide.
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                        -Merch store opens.
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                    -Private frenchie club events.
                    </div>
                </div>
            </div>
            <div className='col'>
                <img src={img4} alt='number4' className='numbers'/>
                <div className='card4'>
                    <div className='title'>
                    Frenchie capabilities unlocked
                    </div>
                    <div className='paragraph' style={styleParagraphWhite}>
                    -Holders will have exclusive access to unlock special capabilities for their Frenchies! Remember it takes 2 to tango 
                    </div>
                    <div className='paragraph' style={styleParagraphGreen}>
                    -More details to follow in Roadmap V2!
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Roadmap;
