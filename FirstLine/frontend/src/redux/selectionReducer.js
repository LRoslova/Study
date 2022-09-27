import { FILLING_SERIES, FILLING_COUNTRY, FILLING_YEAR } from "./types";
import { CLEANING_SERIES, CLEANING_COUNTRY, CLEANING_YEAR } from "./types";

const initialState = {
    series: [],
    country: '',
    year: []
};

export const selectionReducer = (state = initialState, action) => {
    switch(action.type){
        case FILLING_SERIES:
            return {...state, series: state['series'].concat(action.payload)};
        case FILLING_COUNTRY:
            return {...state, country: action.payload};
        case FILLING_YEAR:
            return {...state, year: state['year'].concat(action.payload)};
        case CLEANING_SERIES:
            return {...state, series: state['series'].filter(val => val !== action.payload)};
        case CLEANING_COUNTRY:
            return {...state, country: state['country'].filter(val => val !== action.payload)};
        case CLEANING_YEAR:
            return {...state, year: state['year'].filter(val => val !== action.payload)};
        default:
            return state;
    }
};