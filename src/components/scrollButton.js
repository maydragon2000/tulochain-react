import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import myImage from "../pages/home/image/34.png"

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (

        <div id="wpfront-scroll-top-container" style={{ opacity: "0.8", right: "20px", bottom: "20px", display: visible ? 'block' : 'none' }}>
            <a onClick={scrollToTop}>
                <img src={myImage} alt="" style={{ width: "auto", height: "auto" }} /> </a>      </div>

    );
}

export default ScrollButton;