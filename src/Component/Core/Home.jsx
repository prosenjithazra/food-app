import React from 'react'
import iconimgone from '../../images/oninon.svg'
import iconimgTwo from '../../images/leaf.svg'
import iconimgThree from '../../images/ban-back.png'
import iconimgFour from '../../images/banner-img.png'
import logoicnone from '../../images/l1.png'
import logoicntwo from '../../images/l2.png'
import logoicnthree from '../../images/l3.png'
import logoicnfour from '../../images/l4.png'
import icnOnetbc from '../../images/bread.svg'
import icnOneplate from '../../images/plate.png'
import kitImgwrap from '../../images/kit.png'

const Home = () => {
    return (
        <>
            <div className="banner-outr">
                <div className="banner-sec">
                    <div className="banner-img">
                        <img src={iconimgFour} alt="" />
                    </div>
                    <div className="container">
                        <div className="banner-wrap">
                            <div className="ban-hdr">
                                <h1>We have all what we need for your bundle</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                                    ad minim
                                </p>
                                <a href="#" class="btn">Contact Us</a>
                            </div>
                            <div className="pic2">
                                <img src={iconimgone} alt="" />
                            </div>
                            <div className="pic3">
                                <img src={iconimgTwo} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="pic1">
                        <img src={iconimgThree} alt="" />
                    </div>
                </div>
            </div>

            <div className="logo-sec cmn-gap">
                <div className="container">
                    <div className="logo-outr">
                        <ul>
                            <li>
                                <a href="#"><img src={logoicnone} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={logoicnfour} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={logoicnthree} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={logoicntwo} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={logoicnone} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={logoicnfour} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="connect-sec cmn-gap cmn-gap-nt">
                <div className="container">
                    <div className="connect-outr">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="conct-lft">
                                    <h2 className="cmn-h2">
                                        Why do you <br />
                                        connect with us?
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <a href="#" className="btn">Learn More About Us</a>

                                    <div className="pic4">
                                        <img src={iconimgone} alt="" />
                                    </div>
                                    <div className="pic5">
                                        <img src={icnOnetbc} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="con-rgt">
                                    <div className="row c-row">
                                        <div className="col-md-6 c-col">
                                            <div className="con-box">
                                                <figure><span>01</span></figure>

                                                <h4>Input your location</h4>
                                                <p>
                                                    All companies in every country have to submit income and
                                                    loss be regular company
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 c-col">
                                            <div className="con-box">
                                                <figure><span>02</span></figure>

                                                <h4>Pick a Bundle</h4>
                                                <p>
                                                    All companies in every country have to submit income and
                                                    loss be regular company
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 c-col">
                                            <div className="con-box">
                                                <figure><span>03</span></figure>

                                                <h4>Add what you need</h4>
                                                <p>
                                                    All companies in every country have to submit income and
                                                    loss be regular company
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 c-col">
                                            <div className="con-box">
                                                <figure><span>04</span></figure>

                                                <h4>Get it delivered</h4>
                                                <p>
                                                    All companies in every country have to submit income and
                                                    loss be regular company
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <img src={icnOneplate} alt="" />
                </div>
            </div>

            <div className="kitchen-sec cmn-gap">
                <div className="container">
                    <div className="kitchen-outr">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="kitchen-lft">
                                    <img src={kitImgwrap} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="kitchen-rgt">
                                    <h2 className="cmn-h2">
                                        Everyone can be a chef in their own kitchen
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqut
                                        enim ad minim
                                    </p>
                                    <a href="#" className="btn">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home