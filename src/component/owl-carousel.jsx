import React, {Fragment} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const OwlSlider = (props) => {
    const options = {
        loop : true,
        margin : 10,
        nav : false,
        items : 2,
        responsive:{
            0:{
                items:1,
                margin : 0,
            },
            480:{
                items:2,
                margin: 10,
                stagePadding:40
            }
        }
    }
    
    return (
        <Fragment>
            <OwlCarousel
                className="owl-theme"
                {...options}
            >
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
                <div className="owl-image">
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" />
                        <source 
                            media="(max-width: 465px)"
                            srcSet="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png" />
                        <img src="https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png" alt="a cute kitten" />
                    </picture>
                </div>
            </OwlCarousel>
        </Fragment>
    )
} 


export default OwlSlider