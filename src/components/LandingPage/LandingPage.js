import React, { useState, useEffect } from 'react'
import Navbar from '../NavBar/Navbar'
import AboutUsPage from './AboutUsPage'
import GlitchhForStaying from './GlitchhForStaying'
import HangoutPage from './HangoutPage'
import Lets_Connect_Page from './Lets_Connect_Page';
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import './LandingPage.css';
import ArrowKeysReact from 'arrow-keys-react';



function LandingPage() {
    const [pageNo, setPageNo] = useState(1);

    const onPageIncreaseHandler = () => {
        console.log(pageNo);
        console.log('hello');

        if (pageNo === 4) {
            return;
        }
        setPageNo((prevPage) => {
            return prevPage + 1;
        });
    }
    const onPageDecreaseHandler = () => {
        if (pageNo === 1) {
            return;
        }
        setPageNo((prevPage) => {
            return prevPage - 1;
        });
    }




    // const detectkeyDown = (event) => {
    //     console.log('key press', event.key);
    //     console.log(pageNo);
    //     if (pageNo === 4) {
    //         return;
    //     }
    //     if (event.key === 'ArrowUp') {
    //         if (pageNo === 1) {
    //             return;
    //         } else {
    //             setPageNo((prevPage) => {
    //                 return prevPage - 1;
    //             });
    //         }

    //         console.log(pageNo);

    //     } else if (event.key === 'ArrowDown') {
    //         if (pageNo === 4) {
    //             return;
    //         } else {
    //             setPageNo((prevPage) => {
    //                 return prevPage + 1;
    //             });
    //         }
    //         console.log('');




    //     }
    // }
    // useEffect(() => {
    //     document.addEventListener('keydown', detectkeyDown, true)
    // }, []);

    useEffect(() => {
        console.log('use effect run');
        function handleKeyDown(e) {
            console.log(e.keyCode);
            if (e.keyCode === 40) {
                if (pageNo === 4) {
                    return;
                }
                setPageNo((prevPage) => {
                    return prevPage + 1;
                });
            }
            if (e.keyCode === 38) {
                if (pageNo === 1) {
                    return;
                }
                setPageNo((prevPage) => {
                    return prevPage - 1;


                });
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            console.log('cleanup');
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [pageNo]);




    let className;

    if (pageNo === 1) {

        className = 'landing-page-arrow-button-yellow';

    } else if (pageNo === 2) {
        className = 'landing-page-arrow-button-blue';
    } else if (pageNo === 3) {
        className = 'landing-page-arrow-button-green';
    } else {
        className = 'landing-page-arrow-button-white';
    }

    return (
        <React.Fragment>
            <Navbar />

            <div className="arrow-button">

                <AiOutlineArrowUp className={className} style={{ cursor: "pointer" }} onClick={onPageDecreaseHandler} />
                <AiOutlineArrowDown className={className} onClick={onPageIncreaseHandler} />

            </div>
            {pageNo === 1 && <Lets_Connect_Page />}
            {pageNo === 2 && <AboutUsPage />}
            {pageNo === 3 && <HangoutPage />}
            {pageNo === 4 && <GlitchhForStaying />}

        </React.Fragment>
    )
}


export default LandingPage