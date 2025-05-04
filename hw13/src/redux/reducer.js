import { SET_FILTER } from "./types";
import { users } from "../api/users";

const initialState = {
    users,
    filter: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_FILTER:
        return { ...state, filter: action.payload };
    default:
        return state;
    }
};

export default rootReducer;
