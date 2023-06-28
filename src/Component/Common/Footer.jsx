import React from 'react'

const Footer = () => {
    return (

        <>
            <footer className="footer new-footer-hm">
                <div className="container">
                    <div className="ftr-top">
                        <div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="ftr-lft">
                                    <a href="#" className="ftr-lgo"
                                    ><img src="images/ftr-logo.png" alt=""
                                        /></a>
                                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ftr-links">
                                    <ul>
                                        <li><a href="#">Your Bundle</a></li>
                                        <li><a href="#">Upload a bundle</a></li>
                                        <li><a href="#">Recipes</a></li>
                                        <li><a href="#">Followers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-btm">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="ftr-wrap">
                                    <p>© 2022 Powered by <a href="#">Bundled</a></p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="ftr-wrap">
                                    <ul>
                                        <li><a href="#">Abuse policy </a></li>
                                        <li><a href="#"> Privacy policy </a></li>
                                        <li><a href="#"> Recipes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="social-ftr">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer