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
