import {legacy_createStore} from "redux";
import counterReducer from "./counterReducer";

const store = legacy_createStore(counterReducer)

export default store;