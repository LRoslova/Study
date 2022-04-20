import React from "react";
import {deleteHandler, updateHandler} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Meaning from "./Meaning";


const Choose = () =>{
    const choose = useSelector(state=>state.choose)

    const dispatch = useDispatch();
    const listItems = choose.map((index) =>
        <div className={'favorite_li'}>
            <h3>{index.word}</h3>
            <p>Phonetic: {index.phonetic}</p>
            <Meaning item={index.meaning1}/>
            <Meaning item={index.meaning2}/>
            <Meaning item={index.meaning3}/>
            <button onClick={()=>dispatch(deleteHandler(index.word))}>Delete to chosen</button>

        </div>
    );

    return (
        <div>
            <div className={'favorite'}>
                {listItems.map((item, index)=>{
                    return item
                })}
            </div>
        </div>


    )
}

export default Choose;
