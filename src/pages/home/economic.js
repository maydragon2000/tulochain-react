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
                  <h1 className="elementor-heading-title elementor-size-xl">Token Economics</h1>		</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <div className="elementor-element elementor-element-3faa317 elementor-widget elementor-widget-text-editor" data-id="3faa317" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Tulo Chain has a total of 1,000,000,000,000 tokens. 55% of the tokens will be allocated to presale and initial exchange liquidity. 10%private sale, 10% of the tokens will be allocated to the team, 5% of the tokens will be allocated to strategic advisors and 20% of the tokens will be retained for the ecosystem, this would be allocated towards evolving the utility of the TULO as well as project operations</p>						</div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
      <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-4da703af eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4da703af" data-element_type="section" ><div className="eae-particle-wrapper " id="eae-particle-4da703af"><canvas className="particles-js-canvas-el" width="1172" height="236" style={{ width: "100%", height: "100%" }}></canvas></div>
        <div className="elementor-container elementor-column-gap-default">
          <SingleBox elementCol={50} element="58b837f2" percentElement="ac7285a" commentElement="28a37ef7" percent="55%" hComment="Presale and Initial Exchange Liquidity" />
          <SingleBox elementCol={50} element="b427e91" percentElement="af00eef" commentElement="ae143d6" percent="1,000,000,000,000" hComment="Total Supply" />
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
                  <SingleBox elementCol={25} element="a4d6326" percentElement="3b9f9e7" commentElement="b77eae5" percent="20%" pComment="Ecosystem" />
                  <SingleBox elementCol={25} element="8871a43" percentElement="4456357d" commentElement="2c9da55b" percent="10%" pComment="Private Sale" />
                  <SingleBox elementCol={25} element="48f3d2b4" percentElement="71829fe7" commentElement="9d465f6" percent="10%" pComment="Team Tokens" />
                  <SingleBox elementCol={25} element="27d44791" percentElement="9f8f6ca" commentElement="1e3e53a6" percent="5%" pComment="Advisor tokens" />



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