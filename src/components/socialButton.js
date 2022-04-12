import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const SocialButton = (props) => {
    return (
        <>
            <div className={`has_eae_slider elementor-column elementor-col-${props.elementCol} elementor-inner-column elementor-element elementor-element-${props.element}`} data-id={props.element} data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInRight">
                        <div className={`elementor-element elementor-element-${props.subElement} elementor-shape-circle e-grid-align-left e-grid-align-mobile-center elementor-grid-0 elementor-widget elementor-widget-social-icons`} data-id="788fe3c5" data-element_type="widget" >
                            <div className="elementor-widget-container">
                                <div className="elementor-social-icons-wrapper elementor-grid">
                                    <span className="elementor-grid-item" style={{ marginRight: "5px" }}>
                                        <a className={`elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-animation-shrink elementor-repeater-item-${props.telegramElement}`} href="https://t.me/Tulochain" target="_blank">
                                            <span className="elementor-screen-only">Telegram</span>
                                            <i className="fab fa-telegram"></i>					</a>
                                    </span>
                                    <span className="elementor-grid-item" style={{ marginLeft: "5px" }}>
                                        <a className={`elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink elementor-repeater-item-${props.twitterElement}`} href="https://twitter.com/tulochain" target="_blank">
                                            <span className="elementor-screen-only">Twitter</span>
                                            <i className="fab fa-twitter"></i>					</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}
export default SocialButton;