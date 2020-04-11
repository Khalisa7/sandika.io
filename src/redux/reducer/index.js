// Initial States
const initialState = {
    app: {
        _name: 'Amind',
        _version: '1.0 Beta',
        _owner: 'Herlina Sunaryanto'
    },
    bannerCarousel: [
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        },
        {
            _mobile: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy_mobile.png",
            _desktop: "https://www.thebodyshop.co.id/media/weltpixel/owlcarouselslider/images/d/o/doy.png"
        }
    ],
    cateoryIcon: [
        {
            _label: "Ibu Bayi Dan Anak",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/i/b/ibu-bayi-anak_4.png"
        },
        {
            _label: "Wanita",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/w/a/wanita.png"
        },
        {
            _label: "Pria",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/p/r/pria.png"
        },
        {
            _label: "Cairan Pembersih",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/c/a/cairan.png"
        },
        {
            _label: "Perawatan Tubuh",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/p/e/perawatan-diri.png"
        },
        {
            _label: "Home And Living",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/f/u/furniture.png"
        },
        {
            _label: "Perlengkapan Alat Tulis Dan Kantor",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/a/l/alat-tulis.png"
        },
        {
            _label: "Elektronik",
            _icon_img: "https://www.yogyaonline.co.id/media/weltpixel/owlcarouselslider/images/p/e/perabot.png"
        }
    ],
    logo: {
        _src: 'https://sleekr.co/wp-content/themes/sleekr_08/images/icon/icon-sleekr.svg',
        _alt: 'Sandika Partner',
        _label: 'Sandika'
    },
    navbarLink: [
        {
            _type: 'link',
            _label: 'Login',
            _routes: '/login',
            _style: 'd-none d-md-block nav-link customer-login'
        },
        {
            _type: 'link',
            _label: 'Register',
            _routes: '/register',
            _style: 'd-none d-md-block nav-link customer-register'
        },
        {
            _type: 'link',
            _label: 'Wishlist',
            _routes: '/wishlist',
            _style: 'nav-link wishlist'
        },
        {
            _type: 'link',
            _label: 'Cart',
            _routes: '/cart',
            _style: 'nav-link quickcart'
        }
    ],
    megamenuContent: [
        {
            _title: "Hot Deals",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _item: [
                        { _label: "Promosi Bulan Ini" },
                        { _label: "Indomilk Fair" },
                        { _label: "Healt Fresh" },
                        { _label: "Lifree Popok Dewasa" },
                        { _label: "Cegah Corona" },
                        { _label: "Serba Murah" }
                    ]
                }
            ]
        },
        {
            _title: "Pria",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _url: "/category/hotdeals/idul-fitri"
                }
            ]
        },
        {
            _title: "Wanita",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _url: "/category/hotdeals/idul-fitri"
                }
            ]
        },
        {
            _title: "Kebutuhan Ibu Bayi Dan Anak",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _url: "/category/hotdeals/idul-fitri"
                }
            ]
        },
        {
            _title: "Cairan Dan Bubuk Pembersih",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _url: "/category/hotdeals/idul-fitri"
                }
            ]
        },
        {
            _title: "Hobi",
            _item: [
                {
                    _label: "Kebutuhan Idul Fitri",
                    _url: "/category/hotdeals/idul-fitri"
                }
            ]
        }
    ],
    layeredSearchForm: [
        {
            _type: "category",
            _title: "Category",
            _label: "Kategori",
            _form: [
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Handphone and Gadget",
                    _value: "handphone",
                    _badge: 14
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Suits",
                    _value: "suits",
                    _badge: 509
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Car",
                    _value: "car",
                    _badge: 1133
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Bike",
                    _value: "bike",
                    _badge: 114
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Laptop",
                    _value: "laptop",
                    _badge: 1444
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Home Living",
                    _value: "home living",
                    _badge: 1409
                },
                {
                    _name: "cat",
                    _type: "radio",
                    _label: "Goodie Bag",
                    _value: "goodie bag",
                    _badge: 14
                }
            ]
        },
        {
            _type: "price",
            _title: "Price",
            _label: "Kisaran Harga",
            _form: [
                {
                    _name: "price",
                    _type: "radio",
                    _label: "Rp 0,00 - Rp 500.000,00",
                    _value: "1"
                },
                {
                    _name: "price",
                    _type: "radio",
                    _label: "Rp 500.000,00 - Rp 1.000.000,00",
                    _value: "2"
                },
                {
                    _name: "price",
                    _type: "radio",
                    _label: "Rp 1.000.000,00 - Rp 1.500.000,00",
                    _value: "3"
                },
                {
                    _name: "price",
                    _type: "radio",
                    _label: "Rp 1.500.000,00 - Rp 5.000.000,00",
                    _value: "4"
                },
                {
                    _name: "price",
                    _type: "radio",
                    _label: "Rp 5.000.000,00 - Rp 10.000.000,00",
                    _value: "5"
                },
                {
                    _name: "price",
                    _type: "radio",
                    _label: "> Rp 10.000.000,00",
                    _value: "5"
                }
            ]
        },
        {
            _type: "sort",
            _title: "Sortir",
            _label: "Sortir Harga",
            _form: [
                {
                    _name: "sort",
                    _type: "radio",
                    _label: "Termurah",
                    _value: "termurah"
                },
                {
                    _name: "sort",
                    _type: "radio",
                    _label: "Termahal",
                    _value: "termahal"
                }
            ]
        }
    ],
    productImage: [
        {
            _desktop: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG",
            _mobile: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG"
        },
        {
            _desktop: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG",
            _mobile: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG"
        },
        {
            _desktop: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG",
            _mobile: "https://www.thebodyshop.co.id/media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/M/_/M_101210003.JPG"
        }
    ]
};


function rootReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
