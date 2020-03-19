import React, { Fragment } from 'react';
import OwlSlider from '@src/component/owl-carousel';

const Homepage = () => {
    return (
        <Fragment>
            <div style={{}} className="page page-home">
                <div className="main-slider">
                    <div className="banner-wrapper">
                        <OwlSlider/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Homepage;
