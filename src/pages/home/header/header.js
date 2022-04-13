import React, { useState } from "react";
import ScrollButton from "../../../components/scrollButton";
import myImage from "../image/logo_transparent-removebg-preview-e1647881080803-300x126.png"
const Header = () => {
    const [sideDisplay, setSideDisplay] = useState("block");
    const [sideClose, setSideClose] = useState("none");
    const sideNav = () => {

        if (sideDisplay === "block") {
            setSideDisplay("none");
            setSideClose("block");
        } else {
            setSideDisplay("block");
            setSideClose("none");
        }
    }
    return (<>
        <header className="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemType="https://schema.org/WPHeader" itemScope="itemscope" itemID="#masthead">
            <div id="ast-desktop-header" data-toggle-type="dropdown">
                <div className="ast-main-header-wrap main-header-bar-wrap ">
                    <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
                        <div className=" site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
                            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                    <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                                        <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                                            <span className="site-logo-img"><a href="https://www.tulochain.com/" className="custom-logo-link" rel="home" aria-current="page"><img width="280" height="118" src={myImage} className="custom-logo" alt="TuloChain" sizes="(max-width: 280px) 100vw, 280px" /></a></span>				</div>
                                        {/* <!-- .site-branding --> */}
                                    </div>
                                </div>
                                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                    <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
                                        <div className="ast-main-header-bar-alignment"><div className="main-header-bar-navigation"><nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Site Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope="itemscope"><div className="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border ast-menu-hover-style-underline  stack-on-mobile" ><li id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-97"><a href="https://www.tulochain.com/" aria-current="page" className="menu-link">Home</a></li>
                                            <li id="menu-item-98" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-98"><a href="#features" className="menu-link">Features</a></li>
                                            <li id="menu-item-99" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-99"><a href="#tokeneconomics" className="menu-link">Token Economics</a></li>
                                            <li id="menu-item-100" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100"><a href="#fee" className="menu-link">Tulo Chain Fees</a></li>
                                            <li id="menu-item-101" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101"><a href="#structure" className="menu-link">Structure</a></li>
                                            <li id="menu-item-120" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-120"><a rel="noopener" href="https://usercontent.one/wp/www.tulochain.com/wp-content/uploads/2022/03/Tulo-Chain-Whitepaper.pdf" className="menu-link">Whitepaper</a></li>
                                            <li id="menu-item-102" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-102"><a href="#roadmap" className="menu-link">Roadmap</a></li>
                                        </ul></div></nav></div></div>		</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ast-desktop-header-content content-align-flex-start " style={{ display: "none" }}>
                </div>
            </div>
            {/* <!-- Main Header Bar Wrap --> */}
            <div id="ast-mobile-header" className="ast-mobile-header-wrap " data-type="dropdown">
                <div className="ast-main-header-wrap main-header-bar-wrap">
                    <div className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-transparent-header">
                        <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                            <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                                    <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                                        <span className="site-logo-img"><a href="https://www.tulochain.com/" className="custom-logo-link" rel="home" aria-current="page"><img width="280" height="118" src={myImage} className="custom-logo" alt="TuloChain" sizes="(max-width: 280px) 100vw, 280px" /></a></span>				</div>
                                    {/* <!-- .site-branding --> */}
                                </div>
                            </div>
                            <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
                                    <div className="ast-button-wrap">
                                        <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal" aria-expanded="false" data-index="0" onClick={sideNav}>
                                            <span className="screen-reader-text">Main Menu</span>
                                            <span className="mobile-menu-toggle-icon">
                                                <span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg className="ast-mobile-svg ast-menu2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" style={{ display: sideDisplay }}><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path></svg></span><span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg className="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ display: sideClose }}><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg></span>					</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ast-mobile-header-content content-align-flex-start " style={{ display: sideClose }}>
                    <div className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-header-mobile-menu">
                        <div className="ast-main-header-bar-alignment"><div className="main-header-bar-navigation"><nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="ast-mobile-site-navigation" aria-label="Site Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope="itemscope"><div className="main-navigation"><ul id="ast-hf-mobile-menu" className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-97"><a href="https://www.tulochain.com/" aria-current="page" className="menu-link">Home</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-98"><a href="#features" className="menu-link" onClick={sideNav}>Features</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-99"><a href="#tokeneconomics" className="menu-link" onClick={sideNav}>Token Economics</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100"><a href="#fee" className="menu-link" onClick={sideNav}>Tulo Chain Fees</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101"><a href="#structure" className="menu-link" onClick={sideNav}>Structure</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-120"><a rel="noopener" href="https://usercontent.one/wp/www.tulochain.com/wp-content/uploads/2022/03/Tulo-Chain-Whitepaper.pdf" className="menu-link" onClick={sideNav}>Whitepaper</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-102"><a href="#roadmap" className="menu-link" onClick={sideNav}>Roadmap</a></li>
                        </ul></div></nav></div></div>		</div>
                </div>
            </div>
        </header>
        <ScrollButton />
    </>)
}
export default Header;