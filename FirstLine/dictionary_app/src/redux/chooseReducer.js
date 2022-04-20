import {DELETE_ITEM} from "./types";
import {ADD_ITEM} from "./types";

const initialState = [];

export const chooseReducer = (state = initialState, action)=>{
    switch (action.type){

        case ADD_ITEM:
            console.log(state.concat(action.payload));
            return state.concat(action.payload)

        case DELETE_ITEM:
            console.log(state.filter(item=> item.word !== action.payload));
            return state.filter(item=> item.word !== action.payload)

        default:
            return state
    }
}
