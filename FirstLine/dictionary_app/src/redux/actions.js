import {ADD_ITEM} from "./types";
import {UPDATE_CARD} from "./types";
import {DELETE_ITEM} from "./types";

export const addHandler = (item)=> {
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export const deleteHandler = (word)=> {
    return{
        type: DELETE_ITEM,
        payload: word
    }
}

export const updateHandler = (item)=>{
    return{
        type: UPDATE_CARD,
        payload: item
    }
}