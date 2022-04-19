import {DELETE_TODO} from "./types";
import {ADD_TODO} from "./types";

export const deleteHandler = (id)=> {
    return{
        type: DELETE_TODO,
        payload: id
    }
}
export const addHandler = ()=> {
    return{
        type: ADD_TODO,
        payload: id
    }
}