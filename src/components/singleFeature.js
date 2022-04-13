import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const SingleFeature = (props) => {
    return (
        <>
            <div className={`has_eae_slider elementor-column elementor-col-${props.elementorCol} elementor-inner-column elementor-element elementor-element-${props.elemet}`} data-id={props.elemet} data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className={`elementor-element elementor-element-${props.imageClass} elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon`} data-id={props.imageClass} data-element_type="widget" data-widget_type="icon.default" style={{ display: props.imgDisplay }}>
                        <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                                <div className="elementor-icon elementor-animation-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1336" height="1362" viewBox="0 0 1336 1362" fill="none"><path d="M776.747 726.146L655.013 773.906L760.733 719.96L780.973 681.96L796.147 675.906L776.747 726.146ZM515.223 828.666L538.796 635.533L626.094 616.6L556.648 776.533L515.223 828.666ZM486.696 838.666L414.589 929.413C411.044 927.333 407.401 925.506 403.685 923.933L477.347 831.24C479.399 828.653 483.154 828.226 485.738 830.28C488.319 832.333 488.748 836.08 486.696 838.666V838.666ZM400.638 1047.91C384.622 1068.07 355.192 1071.44 335.036 1055.41C314.881 1039.4 311.514 1009.97 327.53 989.813C343.546 969.666 372.975 966.293 393.129 982.306C413.287 998.333 416.654 1027.76 400.638 1047.91V1047.91ZM316.643 963.28C313.093 966.32 309.808 969.72 306.879 973.413C288.241 996.866 285.767 1028.89 300.573 1055C302.232 1057.92 301.205 1061.63 298.283 1063.29C296.06 1064.55 293.38 1064.25 291.495 1062.76C290.9 1062.29 290.385 1061.69 289.989 1061C281.7 1046.39 277.927 1029.76 279.081 1012.92C280.264 995.68 286.582 979.386 297.352 965.84C300.767 961.546 304.597 957.573 308.739 954.026C311.295 951.853 315.131 952.146 317.317 954.706C319.5 957.266 319.197 961.106 316.643 963.28V963.28ZM351.508 934.6C353.58 934.293 355.689 934.053 357.779 933.893C361.128 933.653 364.048 936.16 364.298 939.52C364.547 942.866 362.032 945.786 358.682 946.04C356.888 946.173 355.079 946.373 353.301 946.64C351.565 946.893 349.892 946.386 348.619 945.373C347.454 944.453 346.623 943.106 346.387 941.506C345.892 938.186 348.184 935.093 351.508 934.6V934.6ZM1022.13 585.72L626.094 689.146L694.493 560.4L389.004 668.026L516.369 640.4L500.139 767.893C497.805 786.226 490.492 803.573 478.993 818.04L391.444 928.213C355.408 917.386 314.752 928.746 289.951 959.96C257.469 1000.84 264.299 1060.52 305.176 1093C346.052 1125.48 405.735 1118.65 438.216 1077.77C463.016 1046.56 464.896 1004.39 446.207 971.733L533.756 861.56C545.255 847.08 560.498 836.04 577.831 829.626L787.867 751.88C792.28 750.253 795.76 746.76 797.4 742.346L826.373 663.84L1022.13 585.72" fill="#28333E"></path><path d="M764.629 452.474L549.08 551.268L549.524 547.638L946.769 285.577L788.959 417.897L861.69 380.699L764.629 452.474ZM766.608 549.166L752.403 567.124C747.682 573.114 742.919 579.091 738.157 585.054L723.87 602.943L710.279 619.822L1066.45 560.396L858.742 576.184L977.062 255.693C978.863 250.808 973.391 246.455 969.052 249.307L535.56 534.293C531.623 536.872 529.016 541.061 528.421 545.728L526.39 561.665L328.854 652.203L546.867 569.402L837.332 459.079L780.745 531.154L766.608 549.166" fill="#316494"></path><path d="M724.452 1028.44L699.754 999.7L724.614 1023.47L736.945 1025.38L740.051 1028.95L724.452 1028.44ZM671.417 966.685L726.51 954.683L740.031 976.759L689.638 973.038L671.417 966.685ZM665.955 959.835L634.238 948.776C634.469 947.608 634.62 946.436 634.696 945.269L667.094 956.568C667.998 956.882 668.473 957.868 668.158 958.772C667.843 959.674 666.859 960.149 665.955 959.835V959.835ZM600.485 956.28C593.44 953.824 589.705 946.094 592.164 939.048C594.62 932.004 602.349 928.271 609.395 930.727C616.438 933.184 620.172 940.914 617.716 947.958C615.257 955.004 607.528 958.737 600.485 956.28V956.28ZM615.615 925.214C614.444 924.533 613.2 923.959 611.909 923.51C603.712 920.652 594.713 923.034 588.985 929.58C588.344 930.312 587.232 930.386 586.497 929.745C585.942 929.257 585.766 928.496 585.994 927.837C586.065 927.63 586.18 927.432 586.332 927.257C589.538 923.593 593.727 920.972 598.445 919.679C603.275 918.356 608.336 918.528 613.071 920.18C614.572 920.704 616.025 921.373 617.391 922.167C618.23 922.659 618.516 923.736 618.025 924.579C617.533 925.421 616.453 925.705 615.615 925.214V925.214ZM626.793 932.013C627.074 932.55 627.342 933.105 627.585 933.661C627.971 934.554 627.564 935.593 626.668 935.982C625.776 936.37 624.737 935.961 624.348 935.068C624.14 934.59 623.913 934.114 623.67 933.654C623.435 933.203 623.413 932.697 623.569 932.251C623.709 931.845 623.998 931.489 624.414 931.271C625.275 930.819 626.34 931.15 626.793 932.013V932.013ZM786.316 1082.17L720.182 983.69L761.942 990.104L703.309 916.804L723.036 949.012L686.603 956.752C681.364 957.865 675.92 957.521 670.863 955.757L632.355 942.329C631.875 931.435 624.882 921.397 613.973 917.593C599.685 912.612 584.009 920.182 579.028 934.469C574.046 948.756 581.616 964.433 595.904 969.414C606.813 973.218 618.532 969.703 625.68 961.47L664.188 974.898C669.248 976.661 673.725 979.776 677.136 983.906L718.473 1033.94C719.34 1035 720.628 1035.61 721.992 1035.64L746.24 1036.07L786.316 1082.17" fill="#28333E"></path><path d="M798.171 998.983L750.548 949.447L751.584 949.221L861.235 1032.87L809.956 1002.34L827.082 1018.68L798.171 998.983ZM771.905 1008.76L765.635 1006.59C763.545 1005.87 761.455 1005.14 759.368 1004.41L753.109 1002.21L747.192 1000.1L797.479 1091.87L773.315 1036.55L872.306 1038.3C873.814 1038.33 874.482 1036.42 873.288 1035.5L753.901 944.126C752.819 943.295 751.424 942.982 750.09 943.265L745.536 944.232L701.893 898.836L745.375 950.574L803.31 1019.51L778.184 1010.91L771.905 1008.76" fill="#316494"></path></svg>			</div>
                            </div>
                        </div>
                    </div>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <div className={`elementor-element elementor-element-${props.titleElement} elementor-widget elementor-widget-text-editor`} data-id={props.titleElement} data-element_type="widget" data-widget_type="text-editor.default" style={{ display: props.titleDisplay }}>
                            <div className="elementor-widget-container">
                                <p className="heading-3">{props.title}</p>						</div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <div className={`elementor-element elementor-element-${props.descriptionElement} elementor-widget elementor-widget-text-editor`} data-id={props.descriptionElement} data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>{props.description}<span style={{ color: "#86d17e" }}><a style={{ color: "#86d17e" }} href="https://usercontent.one/wp/www.tulochain.com/wp-content/uploads/2022/03/Tulo-Chain-Whitepaper.pdf"  rel="noopener">{props.addDescription}</a></span></p>						</div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}
export default SingleFeature;