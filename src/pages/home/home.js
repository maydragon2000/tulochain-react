import React from "react";
import Header from "./header/header";
import Welcome from "./Welcome/Welcome";
import Presale from "./Presale/presale";
import Feature from "./Feature/feature";
import Economic from "./Economic/economic";
import Fee from "./Fee/fee";
import Structure from "./Structure/structure";
import ReadMap from "./ReadMap/readMap";
import Contact from "./Contract/contact";
import Footer from "./Footer/footer";
const Home = () => {
    return (
        <div itemType="https://schema.org/WebPage" itemScope="itemscope" className="home page-template-default page page-id-6 wp-custom-logo ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header ast-page-builder-template ast-no-sidebar astra-3.7.9 elementor-default elementor-kit-5 elementor-page elementor-page-6 ast-desktop e--ua-blink e--ua-chrome e--ua-webkit ast-mouse-clicked" data-elementor-device-mode="desktop">
            <div className="hfeed site" id="page">
                <Header />
                <div id="content" className="site-content">
                    <div className="ast-container">
                        <div id="primary" className="content-area primary">
                            <main id="main" className="site-main">
                                <article className="post-6 page type-page status-publish ast-article-single" id="post-6"
                                    itemType="https://schema.org/CreativeWork" itemScope="itemscope">
                                    <header className="entry-header ast-header-without-markup">
                                    </header>
                                    <div className="entry-content clear" itemProp="text">
                                        <div data-elementor-type="wp-page" data-elementor-id="6" className="elementor elementor-6"
                                            data-elementor-settings="[]">
                                            <div className="elementor-section-wrap">
                                                <Welcome />
                                                <Presale />
                                                <Feature />
                                                <Economic />
                                                <Fee />
                                                <Structure />
                                                <ReadMap />
                                                <Contact />
                                                <Footer />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}
export default Home;