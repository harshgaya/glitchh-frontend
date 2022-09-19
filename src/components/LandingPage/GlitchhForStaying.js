import React from 'react';
import snowChar from '../../Assets/LandingPage/glitchh_for_staying/snow-char.png';
import './GlitchhForStaying.css'

function GlitchhForStaying() {
    return (
        <div className='glitchh-for-page'>
            <div className="snow-char-light">
                <img src={snowChar} alt="snow-char" />
            </div>
            <div className="glitchh-for-staying-texts">

                <div className="glitchh-text">
                    <span className='first-word'>Glitchh</span> For
                </div>

                <div className="staying-text">
                    Staying Close
                </div>

                <div className="glitchh-for-staying-other-text">

                    Surround yourself with people who you’d love to be close to. Virtual connections are now evolving from just ‘social media followers’ to ‘niched audience’. Don’t miss out on opportunities that emerge through your passion .

                </div>
                <div className="world-total-gamers">
                    <div className="game-tilters">
                        <div className="amount">1000+</div>
                        <div className="amount-text">Game Tilters from around the world get connected here.</div>
                    </div>
                    <div className="gamers-around-world">
                        <div className="amount">1M+</div>
                        <div className="amount-text">Game Tilters from around the world get connected here.</div>
                    </div>
                </div>

                <button className='register-now-button'>Register Now</button>


            </div>
        </div>
    )
}

export default GlitchhForStaying