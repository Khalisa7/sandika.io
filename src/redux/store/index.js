import { createStore, combineReducers } from "redux";
import reducerStatic from "@src/redux/reducer/reducer-static";
import reducerCart from "@src/redux/reducer/reducer-cart";
import reducerHome from "@src/redux/reducer/reducer-home";

const rootReducer = combineReducers(
    {
        frontend: reducerStatic,
        home: reducerHome,
        cart: reducerCart
    }
);
const store = createStore(rootReducer);
export default store;
