import React, { useState } from 'react';
import Button from '../UI/Button';
import './Lets_Connect.css';
import firegirl from '../../Assets/LandingPage/lets_connect/fire-girl.png';
import ellipse from '../../Assets/LandingPage/lets_connect/Ellipse.png';
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";


function Lets_Connect_Page(props) {
    // const [pageNo, setPageNo] = useState(1);

    // const onClickHandler = () => {
    //     console.log(pageNo);
    //     console.log('hello');
    //     setPageNo((prevPage) => {
    //         return prevPage + 1;

    //     });
    //     console.log(pageNo);
    // }




    return (
        <div className='lets-connect'>

            <div className="texts">

                <div className="lets-text">
                    Lets
                </div>
                <div className="connect-text">
                    Connect
                </div>
                <div className="other-text">

                    Create your unique presence in a first-of-its-kind gamer’s social platform.

                </div>
                <div className="button">
                    <Button >Get Started</Button>
                </div>


            </div>

            {/* <div className="ellipse">
                <img src={ellipse} alt="fire-girl" />
            </div> */}

            <div className="firegirl">
                <img src={firegirl} alt="fire-girl" />
            </div>

            {/* <div className="arrow-button">

                <AiOutlineArrowUp className='alarm' style={{ cursor: "pointer" }} />
                <AiOutlineArrowDown className='alarm' />

            </div> */}

        </div>
    )
}

export default Lets_Connect_Page