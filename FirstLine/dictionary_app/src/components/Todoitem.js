import React from "react";
import {useDispatch} from "react-redux";
import {deleteHandler} from "../redux/actions";

const Todoitem = ({item}) =>{
    const dispatch = useDispatch();
    return (
        <li>
            <span>
                <input type={"checkbox"} checked={item.completed}/>
                <p key={item.id}>{item.title}</p>
            </span>
            <button onClick={()=> dispatch(deleteHandler(item.id))}>delete</button>
        </li>
    )
}

export default Todoitem;