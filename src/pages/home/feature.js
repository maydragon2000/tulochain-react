import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./style.css";
import SingleFeature from "../../components/singleFeature";
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
                                                            <h1 className="elementor-heading-title elementor-size-xl">The TuloChain Token &amp; Features</h1>		</div>
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
                                                        <p>Tulo is a Finnish word meaning Income, the aim of the Tulo Chain token is to generate a continuous stream of income flow for Tulo token holders by instituting the following utilities and value add elements to the token. The Tulo token is built on the Binance Smart Chain (BEP20 Token Standard).</p>						</div>
                                                </div>
                                                <div className="elementor-element elementor-element-b5266fc elementor-widget elementor-widget-text-editor " data-id="b5266fc" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <p>Tulochain is the first decentralised token with price support feature embedded in the smart contract, that supports the price stability of the token.</p>						</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-3d65d91f elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="3d65d91f" data-element_type="section" id="mission" >
                                    <div className="elementor-container elementor-column-gap-default">

                                        <SingleFeature elementorCol={33} elemet="620c6ce7" imageClass="436ff917" titleElement="f56329f" imgDisplay="block" descriptionElement="da64d11" title="Automated Liquidity Pool" description="The TULO token will provide a stable addition to the exchange liquidity pool, this would ensure that irrespective of the market activity the pool will be sufficiently enhanced to support the required stability." addDescription="" />
                                        <SingleFeature elementorCol={33} elemet="9ffcc2e" imageClass="f5a040c" titleElement="76dedc3" imgDisplay="block" descriptionElement="ac89705" title="Reflections for Token Holders" description="TULO token holders will receive rewards in the native token for holding. The reflections in TULO token are deemed more valuable than most other token reflections because of the price support mechanism built into the TULO token smart contract. For every buy and sell transactions, 2% and 3% respectively will be distributed directly to the wallets holding $TULO." addDescription="" />
                                        <SingleFeature elementorCol={33} elemet="a100156" imageClass="395d0dc" titleElement="0cdb372" imgDisplay="block" descriptionElement="dfd9c3d" title="TULO ‘DAO’ Investment" description="As part of our Phase 3 road map, TULO Chain will be implementing an investment DAO structure that allocates 1% transaction fees as an investment pool fund. The 1% fees will be taken from the current allocation to Marketing, Operations &amp; Product Development category of fees. (See whitepaper for details)" addDescription="" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-9bcaba2 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default " data-id="9bcaba2" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={100} elemet="92eb9d8" imageClass="fa2308b" titleElement="76ed0e3" imgDisplay="block" descriptionElement="100d433" title="Automated Price Support Features" description="Tulo Chain has implemented two key features in its smart contract that provides a tested and effective price support mechanism. The price support system, whilst not able to control market activity will provide a stabilizing input into the token price factor:" addDescription="" />
                                    </div>
                                </section>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpRight">
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-18124a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="18124a9" data-element_type="section" >
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleFeature elementorCol={50} elemet="3f45222" imageClass="" titleElement="1b62a6c" imgDisplay="none" descriptionElement="18b3e08" title="1- Auto LP + Treasury Price Support" description="The smart contract enables an auto creation of LP plus a treasury add-on function where the treasury initiates an auto buyback from the exchange, the buy back value will be equivalent to at least 50% of the value of the LP created (See Whitepaper)" addDescription="" />
                                        <SingleFeature elementorCol={50} elemet="c0d06a3" imageClass="" titleElement="25f1c22" imgDisplay="none" descriptionElement="b0fc82c" title="2- Buy Back Price Support" description="The Smart contract has been developed to track the token price movements, anytime the token price drops below 30% of its all-time high value, the smart contract will auto trigger a chain of buy backs and burn of TULO tokens." addDescription="See Whitepaper" />
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