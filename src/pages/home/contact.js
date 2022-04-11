import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Contact = () => {
    const particle = useContext(AppContext);
    return (
        <>
            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateIn">
                <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-a9fded7 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a9fded7" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-a9fded7"><canvas className="particles-js-canvas-el" width="1107" height="117" style={{ width: "100%", height: "100%" }}></canvas></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1b610d66" data-id="1b610d66" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
                                    <div className="elementor-element elementor-element-5b70b4cb elementor-align-right elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="5b70b4cb" data-element_type="widget" data-widget_type="button.default">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                                <a className="elementor-button elementor-size-sm elementor-animation-shrink" role="button">
                                                    <span className="elementor-button-content-wrapper">
                                                        <span className="elementor-button-text">Buy Now</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-31b147ed" data-id="31b147ed" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
                                    <div className="elementor-element elementor-element-393827c8 elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="393827c8" data-element_type="widget" data-widget_type="button.default">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                                <a className="elementor-button elementor-size-sm elementor-animation-shrink" role="button">
                                                    <span className="elementor-button-content-wrapper">
                                                        <span className="elementor-button-text">Chart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__jello">
                <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-5c176df0 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c176df0" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-5c176df0"><canvas className="particles-js-canvas-el" width="1107" height="257" style={{ width: "100%", height: "100%" }}></canvas></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c8bf8dd" data-id="3c8bf8dd" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInRight">
                                    <div className="elementor-element elementor-element-6cdad813 elementor-shape-circle e-grid-align-mobile-center elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="6cdad813" data-element_type="widget" data-widget_type="social-icons.default">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-social-icons-wrapper elementor-grid">
                                                <span className="elementor-grid-item">
                                                    <a className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-animation-shrink elementor-repeater-item-d65ecbf" href="https://t.me/Tulochain" target="_blank">
                                                        <span className="elementor-screen-only">Telegram</span>
                                                        <i className="fab fa-telegram"></i>					</a>
                                                </span>
                                                <span className="elementor-grid-item">
                                                    <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink elementor-repeater-item-222dd7a" href="https://twitter.com/tulochain" target="_blank">
                                                        <span className="elementor-screen-only">Twitter</span>
                                                        <i className="fab fa-twitter"></i>					</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimationOnScroll>
        </>
    )
}
export default Contact;