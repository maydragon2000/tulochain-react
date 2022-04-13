import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NormalButton from "../../components/normalButton";
import SocialButton from "../../components/socialButton";
const Welcome = () => {
    const particle = useContext(AppContext);
    const [lotateDegree, setLotateDegree] = useState(-9);
    useEffect(() => {
        let degree = 9;
        let lotateState = 0;
        setInterval(() => {
            if (lotateState == 0) {
                degree -= 0.5;
                setLotateDegree(degree);
                if (degree <= -9) {
                    lotateState = 1;
                }
            }
            if (lotateState == 1) {
                degree += 0.5;
                setLotateDegree(degree);
                if (degree >= 9) {
                    lotateState = 0;
                }
            }
        }, 100)
    }, [])
    return (
        <>
            <section id="welcome" data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-22ce23e4 elementor-section-height-min-height eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="22ce23e4" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-22ce23e4"><canvas className="particles-js-canvas-el" width="1172" height="907" style={{ width: "100%", height: "100%" }}></canvas></div>
                <div className="elementor-container elementor-column-gap-no">
                    <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-661f6114" data-id="661f6114" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-6d3b5c1 elementor-section-full_width elementor-section-content-bottom elementor-section-height-default elementor-section-height-default" data-id="6d3b5c1" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-15b5a40c" data-id="15b5a40c" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__bounce" style={{ marginBottom: "20px" }}>
                                                    <div className="elementor-element elementor-element-6cf113ab elementor-widget elementor-widget-text-editor" data-id="6cf113ab" data-element_type="widget" data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>Welcome to</p>						</div>
                                                    </div>
                                                </AnimationOnScroll>
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__lightSpeedIn">
                                                    <div className="elementor-element elementor-element-7b90dad9 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="7b90dad9" data-element_type="widget" data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h1 className="elementor-heading-title elementor-size-xl">TuloChain</h1>		</div>
                                                    </div>
                                                </AnimationOnScroll>
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                                    <div className="elementor-element elementor-element-04acba0 elementor-widget elementor-widget-text-editor  " data-id="04acba0" data-element_type="widget" data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>The 1st Defi Token that tracks its token price with in-built Smart Contract Price Support Features</p>						</div>
                                                    </div>
                                                </AnimationOnScroll>
                                            </div>
                                        </div>
                                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-128e77f8" data-id="128e77f8" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__rollIn">
                                                    <div className="elementor-element elementor-element-0ec5aaa elementor-widget elementor-widget-image " data-id="0ec5aaa" data-element_type="widget" data-widget_type="image.default">
                                                        <div className="elementor-widget-container" style={{ willChange: "transform", transform: `rotateZ(${lotateDegree}deg)` }}>
                                                            <img src="image/Main-logo1-e1647881160889.png" title="Main logo1" alt="Main logo1" />															</div>
                                                    </div>
                                                </AnimationOnScroll>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-bd2f0a1 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="bd2f0a1" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-no">

                                        <NormalButton elementCol={33} element="cf8c5ba" animate="rubberBand" subElement="29dd89b5" value="Buy Now" href="https://www.pinksale.finance/#/launchpad/0x7410067eF7d9C4d465023c275F2ebDe527de0F3b?chain=BSC" />
                                        <NormalButton elementCol={33} element="77e86c89" animate="rubberBand" subElement="329f0ba6" value="Chart" href="" />
                                        <SocialButton elementCol={33} element="cd42813" subElement="788fe3c5" telegramElement="d65ecbf" twitterElement="aee3551" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Welcome;