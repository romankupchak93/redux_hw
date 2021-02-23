import types from "../action/types";

const stateReducer = {
    name: ''
};

export const userName = (state = stateReducer, action) => {
    switch (action.type) {
        case types.SAVE_USER_NAME:
            return { name: action.payload};
        case types.REMOVE_USER_NAME:
            return { name: action.payload};
        default: return state;
    }
};
