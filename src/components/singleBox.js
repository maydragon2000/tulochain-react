import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const singleBox = (props) => {
    return (
        <>
            <div className={`has_eae_slider elementor-column elementor-col-${props.elementCol} elementor-top-column elementor-element elementor-element-${props.element}`} data-id={props.element} data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <div className={`elementor-element elementor-element-${props.percentElement} elementor-widget elementor-widget-text-editor`} data-id={props.percentElement} data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>{props.percent}</p>						</div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <div className={`elementor-element elementor-element-${props.commentElement} elementor-widget elementor-widget-text-editor`} data-id={props.commentElement} data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-xl">{props.hComment}</h1><p>{props.pComment}</p>		</div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}
export default singleBox;