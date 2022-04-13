import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import SingleFeature from "../../components/singleFeature";
const Structure = () => {
    const particle = useContext(AppContext);

    return (
        <>
            <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-c29a353 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c29a353" data-element_type="section" id="structure" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-c29a353"><canvas className="particles-js-canvas-el" width="1172" height="992" style={{ width: "100%", height: "100%" }}></canvas></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-716eb4c" data-id="716eb4c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-b932601 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b932601" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3d129fe" data-id="3d129fe" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                                    <div className="elementor-element elementor-element-119f012 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="119f012" data-element_type="widget" data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h1 className="elementor-heading-title elementor-size-xl">DERIDEX AGGREGATOR</h1>		</div>
                                                    </div>
                                                </AnimationOnScroll>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-6763842 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6763842" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={50} elemet="4904e91" imageClass="" titleElement="" imgDisplay="none" titleDisplay="none" descriptionElement="6219a2e" title="" description="DeriDex will browse through different markets where a token is listed and bring the best offers that might match your  investment by extracting data from different markets/ past searches." addDescription="" />
                                        <SingleFeature elementorCol={50} elemet="4739a57" imageClass="" titleElement="" imgDisplay="none" titleDisplay="none" descriptionElement="2ebb532" title="" description="Yield farming allows the token holders to generate passive income by locking their funds into a lending pool for some interests as a return. Users lend or borrow crypto on a DeFi platform and earn cryptocurrency in return for their services." addDescription="" />

                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-3ebcedd elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="3ebcedd" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={50} elemet="b685bde" imageClass="" titleElement="" imgDisplay="none" titleDisplay="none" descriptionElement="ae5ab24" title="" description="It involves extensive participation of the automated market makers (AMM) : the liquidity providers (LP) that add funds to the liquidity pool from time to time to uphold the ecosystem." addDescription="" />
                                        <SingleFeature elementorCol={50} elemet="adb63f6" imageClass="" titleElement="" imgDisplay="none" titleDisplay="none" descriptionElement="8c0eaf1" title="" description="The resemblance of the staking concept allows LP to earn rewards by facilitating the transactions in a blockchain network." addDescription="" />
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
export default Structure;