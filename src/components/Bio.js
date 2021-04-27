import React from 'react';
import { Link } from 'react-scroll';

import { GitHub, Instagram, Twitter, LinkedIn } from '@material-ui/icons';


const Bio = () => {
    return (
            <section className="bio">
                <div className="bio-pic">
                    <img src={require('../img/img.png')} alt='Ayantunji TImilehin' />
                </div>

                <div className="bio-text">
                    <h1>
                        <span>Hi,</span> I'm Timmy
                    </h1>
                    <h2>I'm a web developer</h2>
                    <p>
                        Solving problems through web development has been
                        my thing for the past three years. I give my very all to each
                        project. Don't take my word for it, click the button below to
                        find out.
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/timmy471" target='blank'>
                            <GitHub/>
                        </a>
                        <a href="https://instagram.com/timmy471" target='blank'>
                            <Instagram/>
                        </a>
                        <a href="https://www.linkedin.com/in/timilehin-micheal/" target="_blank">
                            <LinkedIn />
                        </a>
                    </div>
                    {/* <a href="" className="hire-btn">Hire Me</a> */}
                    <Link
                        to='contact'
                        spy='true'
                        activeClass='active'
                        smooth={true}
                        duration={100}
                        className='hire-btn'
                    >
                        Hire Me
                    </Link>
                </div>
            </section>

		);
}

export default Bio;
