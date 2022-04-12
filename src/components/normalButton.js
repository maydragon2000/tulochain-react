import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const NormalButton = (props) => {
    return (
        <>
            <div className={`has_eae_slider elementor-column elementor-col-${props.elementCol} elementor-inner-column elementor-element elementor-element-${props.element}`} data-id={props.element} data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <AnimationOnScroll animateOnce={true} animateIn={`animate__${props.animate}`}>
                        <div className={`elementor-element elementor-element-${props.subElement} elementor-align-justify elementor-mobile-align-justify elementor-widget elementor-widget-button`} data-id={props.subElement} data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a href={props.href} target="_blank" className="elementor-button-link elementor-button elementor-size-sm elementor-animation-shrink" role="button">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">{ props.value}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}
export default NormalButton;