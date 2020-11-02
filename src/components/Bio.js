import { GitHub, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

const Bio = () => {
    return (
            <section className="bio">
                <div className="bio-pic">
                    <img src={require('../img/img.png')} alt='Rapture Chijoke Godson' />
                </div>

                <div className="bio-text">
                    <h1>
                        <span>Hi,</span> I'm CHIJIOKE
                    </h1>
                    <h2>I'm a web developer</h2>
                    <p>
                        Designing and telling peoples stories, through web design has been
                        my thing for the past one year. I give my very all to each
                        project. Don't take my word for it, click the button bellow to
                        find out.
                    </p>
                    <div class="social-links">
                        <a href="https://github.com/coolpythoncodes" target='blank'>
                            <GitHub/>
                        </a>
                        <a href="https://instagram.com/coolpythoncodes">
                            <Instagram/>
                        </a>
                        <a href="https://twitter.com/coolpythoncodes">
                            <Twitter/>
                        </a>
                    </div>
                    <a href="/#" class="hire-btn">
                        Hire Me
                    </a>
                </div>
            </section>

		);
}

export default Bio;
