import React, {useEffect, useState} from "react";
import Header from "./components/Header"
import Todoitem from "./components/Todoitem";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const[state, setState] = useState('');
    const todo = useSelector(state=>state.todo);


    useEffect(()=>{
        // const fetchdata = async ()=> {
        //     const request = await fetch('https://jsoplaceholder.typicode.com/todos?_page=1&limit=10');
        //     const response = await request;
        //     const json = await response.json();
        //     setState(json);
        // }
        // fetchdata();

    }, [])

  return (
    <div className={"app"}>
        <Header/>
        <p>Hello world!</p>

        <ul>
            {todo ? todo.map((item, index)=>{
                return <Todoitem key={item.id} item={item}/>
            }): <p>Loading...</p>}
        </ul>

    </div>
  );
}

export default App;
