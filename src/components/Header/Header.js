import React, { useState } from 'react';
import './Header.scss';

import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiX} from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import logo from '../../assets/LOGO_Website_1.png';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  let location = useLocation();

  return (
    <nav className='app__navbar'>
        <RouterLink to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img className='app__logo'
                src={logo} alt="logo"/>
        </RouterLink>

        <div className="app__navbar-container">
        {
            location.pathname === '/buy' ? 
            (
                <ul>
                    <li><RouterLink className="app__navbar-link" to="/">Home</RouterLink></li>
                    <li style={{display: 'flex', alignItems: 'center', marginRight: '0'}}>
                        <button className="buttomNav">
                            Connect Wallet
                        </button>
                    </li>
                </ul>
            ) :
            (
                <ul>
                    {/* <li><RouterLink className="app__navbar-link" to="/buy">Mint</RouterLink></li> */}

                    <li><ScrollLink smooth className="app__navbar-link" to="about">About</ScrollLink></li>

                    <li><ScrollLink smooth className="app__navbar-link" to="roadmap">Roadmap</ScrollLink></li>

                    <li><ScrollLink smooth className="app__navbar-link"  to="team">Team</ScrollLink></li>
                </ul>
            )
        }
        </div>
        <div className='app__navbar-menu'>
            <BiMenuAltRight onClick={() => setToggle(true)}/>   
            {toggle && (
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: [-200, 0] }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <HiX onClick={() => setToggle(false)}/>
                    {
                        location.pathname === '/buy' ? 
                        (
                            <ul>
                                <li onClick={() => setToggle(false)}>
                                    <RouterLink className="app__navbar-link" to="/">Home</RouterLink>
                                </li>
                                <li onClick={() => setToggle(false)} 
                                style={{display: 'flex', alignItems: 'center', marginRight: '0'}}
                                >
                                <button className="buttomNav">
                                    Connect Wallet
                                </button>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                {/* <li onClick={() => setToggle(false)}>
                                    <RouterLink className="app__navbar-link" to="/buy">Buy</RouterLink>
                                </li> */}

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)} 
                                        smooth className="app__navbar-link" to="about">About</ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)}
                                        smooth className="app__navbar-link" to="roadmap">Roadmap</ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)}
                                        smooth className="app__navbar-link"  to="team">Team</ScrollLink>
                                </li>
                            </ul>
                        )
                    }
                </motion.div>
            )} 
        </div>
    </nav>
  )
}

export default Header