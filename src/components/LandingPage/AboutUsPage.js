import React from 'react';
import './AboutUsPage.css';
import firemanblue from '../../Assets/LandingPage/about_us/fire-char.png';


function AboutUsPage() {
    return (
        <div className='about-us-page'>
            <div className="fire-man-blue">
                <img src={firemanblue} alt="fire-man-blue" />
            </div>
            <div className="about-us-texts">

                <div className="about-us-text">
                    About Us
                </div>

                <div className="about-us-other-text">

                    Connecting with people need not be complicated. Introducing Glitchh, a platform uniquely designed to help you connect, share and socialize with gamers from all around the globe. We enable passionate gaming geeks Gto monetize their creations and establish a close community.

                </div>
                <div className="years-of-chat">
                    <div className="year-chat">{`Years Of Chat Development & Technology`}</div>
                    <div className="line"></div>
                    <div className="years-no-5">05</div>
                </div>


            </div>
        </div>
    )
}

export default AboutUsPage