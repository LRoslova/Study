
import {UPDATE_CARD} from "./types";

const initialState = {
    word: 'Hello',
    phonetic: "həˈləʊ",
    meaning1: {
        "partOfSpeech": "exclamation",
        "definitions": [
            {
                "definition": "used as a greeting or to begin a phone conversation.",
                "example": "hello there, Katie!",
                "synonyms": [],
                "antonyms": []
            }
        ]
    },
    meaning2: {
        "partOfSpeech": "exclamation",
        "definitions": [
            {
                "definition": "used as a greeting or to begin a phone conversation.",
                "example": "hello there, Katie!",
                "synonyms": [],
                "antonyms": []
            }
        ]
    },
    meaning3: {
        "partOfSpeech": "exclamation",
        "definitions": [
            {
                "definition": "used as a greeting or to begin a phone conversation.",
                "example": "hello there, Katie!",
                "synonyms": [],
                "antonyms": []
            }
        ]
    }
}

export const cardReducer = (state = initialState, action)=>{
    switch (action.type){
        case UPDATE_CARD:
            let newState={
                word: action.payload[0].word,
                phonetic: action.payload[0].phonetic,
                meaning1: action.payload[0].meanings[0],
                meaning2: action.payload[0].meanings[1],
                meaning3: action.payload[0].meanings[2]
            }
            if(newState.meaning2 === undefined){
                newState.meaning2 = {
                    "partOfSpeech": "-",
                    "definitions": [
                        {
                            "definition": "-"
                        }
                    ]
                }}
            if(newState.meaning3 === undefined){
                newState.meaning3 = {
                    "partOfSpeech": "-",
                    "definitions": [
                        {
                            "definition": "-"
                        }
                    ]
                }}
            //console.log(newState);
            return newState

        default:
            return state
    }
}
