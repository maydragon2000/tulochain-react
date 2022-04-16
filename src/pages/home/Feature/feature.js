import React, { useContext } from "react";
import { AppContext } from "../../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./../style.css";
import SingleFeature from "../../../components/singleFeature";
const Feature = () => {
    const particle = useContext(AppContext);
    return (
        <>
            <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-efedb7b eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="efedb7b" data-element_type="section" id="features" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-efedb7b"><canvas className="particles-js-canvas-el" width="1172" height="1740" style={{ width: "100%", hieght: "100%" }}></canvas></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68f8239" data-id="68f8239" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-57a38366 elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="57a38366" data-element_type="section" id="visionn">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6c4bcfd3" data-id="6c4bcfd3" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                                    <div className="elementor-element elementor-element-7f30eaa elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="7f30eaa" data-element_type="widget" data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h1 className="elementor-heading-title elementor-size-xl">DeriDex Features</h1>		</div>
                                                    </div>
                                                </AnimationOnScroll>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-da699e8 elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="da699e8" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b249371" data-id="b249371" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-1ccc50c elementor-widget elementor-widget-text-editor " data-id="1ccc50c" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <p>Decentralized Exchange and Trading protocol that supports Cross-margin, Derivatives trading, Cross-Collateral on Binance Smart Chain(BSC).</p>						</div>
                                                </div>
                                                <div className="elementor-element elementor-element-b5266fc elementor-widget elementor-widget-text-editor " data-id="b5266fc" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <p></p>						</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-3d65d91f elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="3d65d91f" data-element_type="section" id="mission" >
                                    <div className="elementor-container elementor-column-gap-default">

                                        <SingleFeature elementorCol={33} elemet="620c6ce7" imageClass="436ff917" titleElement="f56329f" imgDisplay="block" descriptionElement="da64d11" title="Cross-Collateral" description="Traders can deposit majority of supported tokens as collateral for their positions, saving on swap fees." addDescription="" />
                                        <SingleFeature elementorCol={33} elemet="9ffcc2e" imageClass="f5a040c" titleElement="76dedc3" imgDisplay="block" descriptionElement="ac89705" title="Staking" description="DeriDex supports staking to help with the sustainability of the project .Earn Passive Income by staking your tokens in the Farms/Pools and generating rewards with high yield." addDescription="" />
                                        <SingleFeature elementorCol={33} elemet="a100156" imageClass="395d0dc" titleElement="0cdb372" imgDisplay="block" descriptionElement="dfd9c3d" title="Cross-Margin" description="Leverage is distributed across all positions under a single account, allowing for unparalleled capital efficiency." addDescription="" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-9bcaba2 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="9bcaba2" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={100} elemet="92eb9d8" imageClass="fa2308b" titleElement="76ed0e3" imgDisplay="block" descriptionElement="100d433" title=" Automated Price Support Features" description="DeriDex Chain has implemented features in its smart contract that provides a tested and effective price support mechanism. The price support system, whilst not able to control market activity will provide a stabilizing input into the token price factor:" addDescription="" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-18124a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="18124a9" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={50} elemet="3f45222" imageClass="" titleElement="1b62a6c" imgDisplay="none" descriptionElement="18b3e08" title=" Instant transactions" description="Binance Smart chain enables multiple transactions per second, compared to Ethereum's current 17 transactions per second on layer 1, enabling lightning quick trades and settlements." addDescription="" />
                                        <SingleFeature elementorCol={50} elemet="c0d06a3" imageClass="" titleElement="25f1c22" imgDisplay="none" descriptionElement="b0fc82c" title="Network advantage Low fees" description="Transaction fee over the Smart chain network is not high making every trade even more profitable." addDescription="See Whitepaper" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}
export default Feature;