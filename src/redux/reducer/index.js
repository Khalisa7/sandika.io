import { ADD_ARTICLE } from "@src/redux/constants/action-types";

// Initial States
const initialState = {
    articles: [],
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
    ]
};


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });

        default:
            return state;
    }
}

export default rootReducer;
