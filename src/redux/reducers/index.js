import { combineReducers } from "redux";
import {userName} from "./nameReducer";

export default combineReducers({
    name: userName
})
