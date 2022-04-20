import React from "react";
import {useState, useEffect} from "react";
import {deleteHandler, updateHandler} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Meaning from "./Meaning";
import {addHandler} from "../redux/actions";
import Choose from "./Choose";

const Search = () =>{
    const[value, setValue] = useState('');
    const card = useSelector(state=>state.card)

    const dispatch = useDispatch();

    const fetchdata = async ()=> {
        const request = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + value + "?_page=1&limit=1");
        const response = await request;
        const json = await response.json();
        dispatch(updateHandler(json));
    };

    return (
        <div>
            <div className={'word_card'}>
                <input type={"text"} onChange={event => setValue(event.target.value)}/>
                <button onClick={fetchdata}>search</button>
                <h3>{card.word}</h3>
                <p>Phonetic: {card.phonetic}</p>
                <div className={'meaning'}>
                    <Meaning item={card.meaning1}/>
                    <Meaning item={card.meaning2}/>
                    <Meaning item={card.meaning3}/>
                </div>
                <button onClick={()=>dispatch(addHandler(card))}>Add to chosen</button>
            </div>

            <Choose/>

        </div>

    )
}

export default Search;
