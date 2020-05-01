import initialState from "@src/redux/initialstate/static";

function reducerStatic (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducerStatic;
