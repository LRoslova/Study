import {ADD_TODO, DELETE_TODO} from "./types";

const initialState = [
    {id: 0, title: 'Buy milk', completed: false},
    {id: 1, title: 'Buy bread', completed: false},
    {id: 2, title: 'mysor', completed: true}
]

export const todoReducer = (state = initialState, action)=>{
    switch (action.type){
        case DELETE_TODO:
            return state.filter(item => item.id !== action.payload)
        case ADD_TODO:
            return state.append({id: 3, title: 'myso2r', completed: true})
        default:
            return state
    }
    return state
}