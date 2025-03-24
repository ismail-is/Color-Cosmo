import React from 'react';

import Ws1 from '/public/images/about/product-shape.png'
import Ws2 from '/public/images/about/04.jpg'
import Ws3 from '/public/images/about/05.jpg'
import Ws4 from '/public/images/feature/StickersV30.png'
import Ws5 from '/public/images/line.png'
import Image from 'next/image';


const WorksSection = (props) => {
    return (
        <section className={"" +props.hclass} style={{ backgroundImage: `url(${props.Ws6})`}}>
            <div className="product-shape float-bob-x">
                <Image src={Ws1} alt="img" />
            </div>
            <div className="container">
                <div className={"" +props.eclass}>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-feature-image">
                                    <Image src={Ws2} alt="img"  className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s" />
                                        <div className="about-feature-image reveal image-anime">
                                        <Image src={Ws3} alt="img" />
                                        </div>
                                        <div className="stickers-shape">
                                        <Image src={Ws4} alt="img" />
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-feature-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        How Print-On-Demand
                                        <span><Image src={Ws5} alt="img" />Drop Shipping</span> Works
                                    </h2>
                                </div>
                                <div className="box-items-area mt-3 mt-md-0">
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Competitive & flexible product pricing</h5>
                                        <p>
                                            Everyone’s local printer, we partner with more than 50 print
                                            on demand suppliers in over 10  we partner with more
                                        </p>
                                    </div>
                                    <div className="box-item active wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Catalog of 350+ products</h5>
                                        <p>
                                            Everyone’s local printer, we partner with more than 50 print
                                            on demand suppliers in over 10  we partner with more
                                        </p>
                                    </div>
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Competitive & flexible product pricing</h5>
                                        <p>
                                            Everyone’s local printer, we partner with more than 50 print
                                            on demand suppliers in over 10  we partner with more
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksSection;