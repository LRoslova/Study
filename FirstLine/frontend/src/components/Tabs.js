import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import AppRoutes from "./Routes";
import {Australia, Belarus, China, Germany} from "../RowData";
import {updateRow} from "../redux/actions";

const parseTable = (selection)=>{
    let country;
    let datasetsChart=[];
    if(selection.country=="Australia"){
        const result = Australia.filter(({ year }) => selection.year.includes(year));
        country = result;
    }
    if(selection.country=="Belarus"){
        const result = Belarus.filter(({ year }) => selection.year.includes(year));
        country = result;
    }
    if(selection.country=="China"){
        const result = China.filter(({ year }) => selection.year.includes(year));
        country = result;
    }
    if(selection.country=="Germany"){
        const result = Germany.filter(({ year }) => selection.year.includes(year));
        country = result;
    }
    for(let i=0; i<selection.series.length; i++){
        if (selection.series[i]=='GDP (constant 2015 US$)'){
            let tmp = {
                label: "GDP (constant 2015 US$)",
                data: country.map((data) => data.GDP_KD),
                backgroundColor: [
                    "#50AF95",
                ],
                borderColor: "#50AF95",
                borderWidth: 2,
                tension: 0.5
            };
            datasetsChart.push(tmp);
        }
        if (selection.series[i]=='GDP (constant LCU)'){
            let tmp = {
                label: "GDP (constant LCU)",
                data: country.map((data) => data.GDP_KN),
                backgroundColor: [
                    "#FFA500",
                ],
                borderColor: "#FFA500",
                borderWidth: 2,
                tension: 0.5
            };
            datasetsChart.push(tmp);
        }
        if(selection.series[i]=='GDP (current US$)'){
            let tmp = {
                label: "GDP (current US$)",
                data: country.map((data) => data.GDP_CN),
                backgroundColor: [
                    "#FF7F50",
                ],
                borderColor: "#FF7F50",
                borderWidth: 2,
                tension: 0.5
            }
            datasetsChart.push(tmp);
        }
        if(selection.series[i]=='GDP (current LCU)'){
            let tmp = {
                label: "GDP (current LCU)",
                data: country.map((data) => data.GDP_CD),
                backgroundColor: [
                    "blue",
                ],
                borderColor: "blue",
                borderWidth: 2,
                tension: 0.5
            }
            datasetsChart.push(tmp);
        }
    }
    return [country, datasetsChart];
}

const items = [ 'Graph', 'Bar', 'Pie', 'Table'];

function Tabs() {
    const [ active, setActive ] = React.useState(-1);
    const selection = useSelector(state=>state.selection);
    //console.log(selection);
    const dispatch = useDispatch();
    let navigate = useNavigate();
  
    const openTab = e => {
        if(active !== -1){
            let indexActive = +e.target.dataset.index;
            setActive(indexActive);
            navigate(`/analitics/${items[indexActive].toLowerCase()}`);
        }
    };


    useEffect(()=>{
        if(selection.series.length && selection.country && selection.year.length){
            let indexActive = active !== -1 ? active : 0;
            setActive(indexActive);
            navigate(`/analitics/${items[indexActive].toLowerCase()}`);
            let res = parseTable(selection);
            dispatch(updateRow({data: res[0], datasets: res[1]}));
        }

    },[selection]);

    return (
      <div className='View'>
        <div className="tab">
            {items.map((item, i) => (
                <button
                    className={`tabs__btn ${i === active ? 'tabs__btn_active' : ''}`}
                    onClick={openTab}
                    data-index={i}
                    key={item}
                >{item}</button>
            ))}
        </div>
        <div className="Routes">
            {<AppRoutes/>}
        </div>
      </div>
    );
};

export default Tabs;