import React, { useContext } from "react";
import { AppContext } from "../../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NormalButton from "../../../components/normalButton";
import SocialButton from "../../../components/socialButton";
const Contact = () => {
    const particle = useContext(AppContext);
    return (
        <>
            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateIn">
                <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-a9fded7 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a9fded7" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-a9fded7"><canvas className="particles-js-canvas-el" width="1107" height="117" style={{ width: "100%", height: "100%" }}></canvas></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <NormalButton elementCol={50} element="1b610d66" subElement="5b70b4cb" animate="fadeInLeft" value="Buy Now" href="https://www.pinksale.finance/#/launchpad/0x7410067eF7d9C4d465023c275F2ebDe527de0F3b?chain=BSC" />
                        <NormalButton elementCol={50} element="31b147ed" subElement="393827c8" animate="fadeInLeft" value="Chart" href="" />
                    </div>
                </section>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__jello">
                <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-5c176df0 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c176df0" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-5c176df0"><canvas className="particles-js-canvas-el" width="1107" height="257" style={{ width: "100%", height: "100%" }}></canvas></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <SocialButton elementCol={100} element="3c8bf8dd" subElement="6cdad813" telegramElement="d65ecbf" twitterElement="222dd7a" />
                    </div>
                </section>
            </AnimationOnScroll>
        </>
    )
}
export default Contact;