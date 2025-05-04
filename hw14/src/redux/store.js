import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducer from "./reducer";

const store = legacy_createStore(reducer, devToolsEnhancer());

export default store;