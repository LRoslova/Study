import {UPDATE_ROWDATA} from "./types";

const initialState = {
        labels: "",
        datasets: '',
    };

export const rowDataReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_ROWDATA:
            let newState={
                labels: action.payload.data.map((data) => data.year),
                datasets: action.payload.datasets,
            }
            return newState;

        default:
            return state;
    }
};