import { SET_FILTER } from "./types";

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});
