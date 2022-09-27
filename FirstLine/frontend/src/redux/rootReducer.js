import { combineReducers } from "redux";
import { selectionReducer } from "./selectionReducer";
import {rowDataReducer} from "./rowDataReducer";

export const rootReducer = combineReducers({
    selection: selectionReducer,
    rowData: rowDataReducer
});