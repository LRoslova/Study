import {combineReducers} from "redux";
import {cardReducer} from "./cardReducer";
import {chooseReducer} from "./chooseReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
    choose: chooseReducer
});