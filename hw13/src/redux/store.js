import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./reducer";

const appStore = legacy_createStore(rootReducer, devToolsEnhancer());

export default appStore;
