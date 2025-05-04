import { SET_USER_INFO } from "./types";

const initialStore = {
    user: {
        username: 'John Doe',
        userStatus: 'online',
    }
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...store, user: { ...store.user, ...action.payload } }

        default:
            return store;
    }
};

export default reducer;