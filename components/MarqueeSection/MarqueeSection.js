import React from 'react';

import MS1 from '/public/images/marquee-box.png'
import Image from 'next/image';

const MarqueeSection = (props) => {
    return (
        <div className={"" +props.hclass}>
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide">web design</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">sitcker print</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Custom Printing</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Packageing</div>
                        <div><Image src={MS1} alt="img" /></div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">web design</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">sitcker print</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Custom Printing</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Packageing</div>
                        <div><Image src={MS1} alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;