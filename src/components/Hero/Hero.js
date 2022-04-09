import * as React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero_background">
        <div className="hero_container" >
            <div >
                the official miami <br/> frenchie club
            </div>
            <div className='buttomHome-wrapper'>
                <Link className="buttomHome" 
                // to="/buy"
                to='/'
                >
                    Mint price coming soon
                </Link>
            </div>
        </div>
    </div>
  );
}