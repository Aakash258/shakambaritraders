import React from 'react'
import '../styling/footerstyle.css'
export default function Footer() {
    return (
        <div style={{'margin-top':'30px'}}>
            <footer class="new_footer_area bg_color" >
                <div class="new_footer_top"style={{'paddingTop':'50px'}}>
                    <div class="container" >
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ "visibility": "visible", "animation-delay": "0.2s", "animation-name": "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ "visibility": "visible", "animation-delay": "0.4s", "animation-name": "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="/#">Company</a></li>
                                        <li><a href="/#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ "visibility": "visible", "animation-delay": "0.6s", "animation-name": "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="/#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ "visibility": "visible", "animation-delay": "0.8s", "animation-name": "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div class="f_social_icon">
                                        <a href="/#" class="fa fa-facebook"></a>
                                        <a href="/#" class="fa fa-instagram"></a>
                                        <a href="/#" class="fa fa-linkedin"></a>
                                        <a href="/#" class="fa fa-youtube"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-7">
                                <p class="mb-0 f_400">© Aakash Agrawal 2020 All rights reserved.</p>
                            </div>
                            <div class="col-lg-6 col-sm-5 text-right">
                                <p>Made for <i class="icon_heart"></i><a href="/#">Junglee Apparels</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
