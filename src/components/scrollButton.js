import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

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

        <div id="wpfront-scroll-top-container" style={{ opacity: "0.8", right: "20px", bottom: "20px", display: visible?'block':'none' }}>
            <a onClick={scrollToTop}>
                <img src="https://usercontent.one/wp/www.tulochain.com/wp-content/plugins/wpfront-scroll-top/images/icons/34.png" alt="" style={{ width: "auto", height: "auto" }} /> </a>      </div>

    );
}

export default ScrollButton;