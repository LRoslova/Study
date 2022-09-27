import {FILLING_SERIES, FILLING_COUNTRY, FILLING_YEAR, UPDATE_ROWDATA} from "./types";
import { CLEANING_SERIES, CLEANING_COUNTRY, CLEANING_YEAR } from "./types";

export function fillingSeries(data){
    return {
        type: FILLING_SERIES,
        payload: data
    };
};

export function fillingCountry(data){
    return {
        type: FILLING_COUNTRY,
        payload: data
    };
};

export function fillingYear(data){
    return {
        type: FILLING_YEAR,
        payload: data
    };
};

export function cleaningSeries(data){
    return {
        type: CLEANING_SERIES,
        payload: data
    };
};

export function cleaningCountry(data){
    return {
        type: CLEANING_COUNTRY,
        payload: data
    };
};

export function cleaningYear(data){
    return {
        type: CLEANING_YEAR,
        payload: data
    };
};

export function updateRow(data){
    return {
        type: UPDATE_ROWDATA,
        payload: data
    };
};