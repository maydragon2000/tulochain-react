import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./style.css";
import SingleBox from "../../components/singleBox";
const Economic = () => {
  const particle = useContext(AppContext);

  return (<>
    <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-53ae3312 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="53ae3312" data-element_type="section" id="tokeneconomics" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-53ae3312"><canvas className="particles-js-canvas-el" width="1172" height="405" style={{ width: "100%", height: "100%" }}></canvas></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5bc2bbc6" data-id="5bc2bbc6" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <div className="elementor-element elementor-element-7c52a6 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading " data-id="7c52a6" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-xl">DERIDEX PROTOCOL</h1>		</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <div className="elementor-element elementor-element-3faa317 elementor-widget elementor-widget-text-editor" data-id="3faa317" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>DERIDEX PROTOCOL is the a Decentralized Exchange and Trading protocol  that supports Cross-margin, Derivatives trading, Cross-Collateral on Binance Smart Chain(BSC). DeriDex is introducing itself as a strong actor in DeFi, planning on rapid growth, sustainable expansion and aggressive business approach. We understand that such plans and goals require continuous innovation, high flexibility and market adaptability</p>						</div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
      <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-4da703af eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4da703af" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-4da703af"><canvas className="particles-js-canvas-el" width="1172" height="236" style={{ width: "100%", height: "100%" }}></canvas></div>
        <div className="elementor-container elementor-column-gap-default">
          <SingleBox elementCol={50} element="58b837f2" percentElement="ac7285a" commentElement="28a37ef7" percent="WHY DERIDEX PROTOCOL" hComment="Derivatives are financial contracts whose value is dependent on an underlying asset or group of assets." />
          <SingleBox elementCol={50} element="b427e91" percentElement="af00eef" commentElement="ae143d6" percent="Options Trading" hComment=" Options are derivative contracts that give the buyer a right to buy/sell the underlying asset at the specified price during a specifiedperiod." />
        </div>
      </section>
    </AnimationOnScroll>
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
      <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-5edfedb1 eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5edfedb1" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-5edfedb1"><canvas className="particles-js-canvas-el" width="1172" height="191" style={{ width: "100%", height: "100%" }}></canvas></div>
        <div className="elementor-container elementor-column-gap-default">
          <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d1dda8e" data-id="4d1dda8e" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-69ebed83 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="69ebed83" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                <div className="elementor-container elementor-column-gap-default">
                  <SingleBox elementCol={25} element="a4d6326" percentElement="3b9f9e7" commentElement="b77eae5" percent="Futures Trading" pComment="Futures are Programmed contracts that allow the holder to buy/sell the asset at an agreed price at the specified date." />
                  <SingleBox elementCol={25} element="8871a43" percentElement="4456357d" commentElement="2c9da55b" percent="Swaps" pComment=" Swaps are derivative contracts which is an agreement between two counterparties to exchange financial instruments or cashflows or payments for a certain time" />
                  <SingleBox elementCol={25} element="48f3d2b4" percentElement="71829fe7" commentElement="9d465f6" percent="Cross-Collateral" pComment="Traders can deposit a variety of supported tokens as collateral for their positions, saving on swap fees." />
                  <SingleBox elementCol={25} element="27d44791" percentElement="9f8f6ca" commentElement="1e3e53a6" percent="Cross-Margin" pComment="Leverage is shared across all positions under a single account, allowing for un-disorganized capital efficiency." />

            </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  </>)
}
export default Economic;