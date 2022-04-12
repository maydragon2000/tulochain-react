import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";
import "./style.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import SingleBox from "../../components/singleBox";
const Fee = () => {
    const particle = useContext(AppContext);

    return (
        <>
            <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-effd87c eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="effd87c" data-element_type="section" id="fee" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-effd87c"><canvas className="particles-js-canvas-el" width="1172" height="341" style={{ width: "100%", height: "100%" }}></canvas></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-072c8fd" data-id="072c8fd" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                <div className="elementor-element elementor-element-cac5464 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="cac5464" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-xl">Utility of Tulo Chain Fees</h1>		</div>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                <div className="elementor-element elementor-element-2b4badc elementor-widget elementor-widget-text-editor " data-id="2b4badc" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p>The trading fees for Tulo Chain has been implemented to provide a stable structure for price support, product development and the ecosystem management. The amount of fees for all buys is 13% and all sells is 16%</p>						</div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInUp">
                <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-628e34c eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="628e34c" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-628e34c"><canvas className="particles-js-canvas-el" width="1172" height="616" style={{ width: "100%", height: "100%" }}></canvas></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-93eb42e" data-id="93eb42e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
                                    <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-4f7d877 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4f7d877" data-element_type="section" >
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-220b41f" data-id="220b41f" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                                        <div className="elementor-element elementor-element-ca95774 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="ca95774" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h1 className="elementor-heading-title elementor-size-xl">Buy Trading Fees</h1>		</div>
                                                        </div>
                                                    </AnimationOnScroll>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </AnimationOnScroll>
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-b45d72b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b45d72b" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleBox elementCol={50} element="667c8c3" percentElement="9af9609" commentElement="cd2a4e6" percent="4%" pComment="Liquidity + LMM" />
                                        <SingleBox elementCol={50} element="fac2ed5" percentElement="836d6d6" commentElement="bcce9d8" percent="2%" pComment="Buy Back + LMM" />

                                    </div>
                                </section>
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-a20b0f3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a20b0f3" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleBox elementCol={50} element="df31438" percentElement="2ab3e0a" commentElement="8908d0f" percent="2%" pComment="Reflection" />
                                        <SingleBox elementCol={50} element="97d24a6" percentElement="1468481" commentElement="673295c" percent="5%" pComment="Marketing, Treasury2 Product Development" />

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="has_eae_slider elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d2be674" data-id="d2be674" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
                                    <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-5a0f6fd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5a0f6fd" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0740511" data-id="0740511" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                                        <div className="elementor-element elementor-element-9d4b598 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="9d4b598" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h1 className="elementor-heading-title elementor-size-xl">Sell Trading Fees</h1>		</div>
                                                        </div>
                                                    </AnimationOnScroll>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </AnimationOnScroll>
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-6a0c95e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6a0c95e" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleBox elementCol={50} element="b3c7ca8" percentElement="2b228fe" commentElement="f5f71cd" percent="4%" pComment="Liquidity + LMM" />
                                        <SingleBox elementCol={50} element="ec5e2c6" percentElement="010c283" commentElement="82630cd" percent="2%" pComment="Buy Back + LMM" />
                                    </div>
                                </section>
                                <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-d387f0a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d387f0a" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <SingleBox elementCol={50} element="dd206f1" percentElement="36654c7" commentElement="2eebe18" percent="3%" pComment="Reflection" />
                                        <SingleBox elementCol={50} element="ede393e" percentElement="445b130" commentElement="eb980e8" percent="7%" pComment="Marketing, Treasury2 Product Development" />

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimationOnScroll>
        </>
    )
}
export default Fee;