import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/appProvider";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Presale = () => {
  var dt = new Date();
  const particle = useContext(AppContext);
  const [transLength, setTransLength] = useState(0);
  useEffect(() => {
    let length = 0;
    let lotateState = 0;
    setInterval(() => {
      if (lotateState === 0) {
        length += 0.5;
        setTransLength(length);
        if (length >= 5) {
          lotateState = 1;
        }
      }
      if (lotateState === 1) {
        length -= 0.5;
        setTransLength(length);
        if (length <= 0) {
          lotateState = 0;
        }
      }
    }, 100)
  }, [])
  return (<>
    <section data-eae-particle={particle} className="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-439009e eae-particle-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="439009e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;_ha_eqh_enable&quot;:false}"><div className="eae-particle-wrapper " id="eae-particle-439009e"><canvas className="particles-js-canvas-el" width="1172" height="185" style={{ width: "100%", height: "100%" }}></canvas></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2f05e3b" data-id="2f05e3b" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* here  */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__rotateInUpLeft">
              <section className="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-ef18e90 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ef18e90" data-element_type="section" >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-048cd58" data-id="048cd58" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-b999c8a elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="b999c8a" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container" style={{ willChange: "transform", transform: `translateX(${transLength}px) translateY(${transLength}px)` }}>
                          <h1 className="elementor-heading-title elementor-size-xl"><a href="https://www.pinksale.finance/#/launchpad/0x7410067eF7d9C4d465023c275F2ebDe527de0F3b?chain=BSC">TOKEN PRESALE - {dt.getDate()}th April { dt.getHours()}PM UTC</a></h1>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  </>)
}
export default Presale;