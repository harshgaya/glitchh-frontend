import React from 'react';
import './HangoutPage.css';
import characterText1 from '../../Assets/LandingPage/hangout_page/create-avatar.png';
import characterText2 from '../../Assets/LandingPage/hangout_page/referals.png';
import characterText3 from '../../Assets/LandingPage/hangout_page/chat-voice.png';
import characterLight from '../../Assets/LandingPage/hangout_page/char-light.png';

function HangoutPage() {
    return (
        <div className="hangout-page">

            <div className="hangout-texts">

                <div className="hangout-the-text">
                    The
                </div>
                <div className="hangout-single-text">
                    Hangouts
                </div>
                <div className="hangout-other-text">

                    Glitchh Servers Are Organized Into Topic-Based Channels Glitchh Servers Are Organized Into Topic Servers Are Organized Into Topics.

                </div>
                <div className="character-text-1">
                    <img src={characterText1} alt="create-avatar" />
                    <img src={characterText2} alt="create-avatar" />
                    <img src={characterText3} alt="create-avatar" />
                    <img src={characterText1} alt="create-avatar" />
                </div>



            </div>
            <div className="char-light">
                <img src={characterLight} alt="fire-girl" />
            </div>

        </div>
    )
}

export default HangoutPage