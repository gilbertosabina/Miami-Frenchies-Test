import React from 'react';
import './Footer.scss';
import logo from '../../assets/LOGO_Website_1.png';

import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    let location = useLocation();

    return (
        <>
            <div className='footer'>
                <div>
                    <img src={logo} alt='footer-logo' className='footer-logo' />
                    <div >
                        <a href='https://twitter.com/miafrenchieclub?s=21' target='_blank' rel='noreferrer'>
                            <BsTwitter className='footerItem' />
                        </a>
                        <a href='https://discord.gg/ZtP8JFXeBF' target='_blank' rel='noreferrer'>
                            <BsDiscord className='footerItem' />
                        </a>
                        <a href='https://instagram.com/miamifrenchieclub?utm_medium=copy_link' target='_blank' rel='noreferrer'>
                            <FaInstagramSquare className='footerItem' />
                        </a>
                    </div>
                </div>
                <div style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        location.pathname === '/buy' ?
                            (
                                <div className='footer-links-container'>
                                    <Link to='/' className='footerItem'>Home</Link>
                                </div>
                            ) : (
                                <div className='footer-links-container'>
                                    {/* <Link to='/buy' className='footerItem'>Buy</Link> */}
                                    <ScrollLink smooth to='about' className='footerItem'>about</ScrollLink>
                                    <ScrollLink smooth to='roadmap' className='footerItem'>roadmap</ScrollLink>
                                    <ScrollLink smooth to='team' className='footerItem'>team</ScrollLink>
                                </div>
                            )
                    }

                    <div className='footer-links-container'>
                        <a href='https://docs.google.com/document/d/e/2PACX-1vQcSyC6K82o0TYxMF-20gt4u6HmEdpqRYES2DNR49bMbu9S-K5drjnjekVQlL4i_W_yEIbq91FZPrjk/pub' target='_blank' rel='noreferrer'
                            className='footerItem'>
                            terms & conditions
                        </a>
                    </div>
                </div>
                <div className='foot'>
                    Cafecito labs llc.
                </div>
            </div>
        </>
    )
}

export default Footer