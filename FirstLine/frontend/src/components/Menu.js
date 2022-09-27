import './style.css';
import { connect } from 'react-redux';

import { fillingSeries, fillingCountry, fillingYear } from '../redux/actions';
import { cleaningSeries, cleaningCountry, cleaningYear } from '../redux/actions';

const items = [
    {   
        title: 'Series', 
        data: [ 'GDP (constant 2015 US$)', 'GDP (constant LCU)', 'GDP (current US$)', 'GDP (current LCU)']
    },
    {
        title: 'Country', 
        data: ['Australia', 'Belarus', 'China', 'Germany']
    },
    {
        title: 'Year', 
        data: [ 2020, 2019, 2018, 2017, 2016]
    }
];

function Menu(props){

    const handleChange = (e, val, title) => {
        if(e.target.checked){
            switch (title) {
                case 'Series':
                    props.fillingSeries(val);
                    break;
                case 'Country':
                    props.fillingCountry(val);
                    break;
                case 'Year':
                    props.fillingYear(val);
                    break;
                default:
                    break;
            }

        }
        else{
            switch (title) {
                case 'Series':
                    props.cleaningSeries(val);
                    break;
                case 'Country':
                    props.cleaningCountry(val);
                    break;
                case 'Year':
                    props.cleaningYear(val);
                    break;
                default:
                    break;
            }
        }
    };

    return(
        <div className="Menu">
            {items.map((item) => (
                <div className={`Menu__${item.title}`} key={item.title}>
                    <h3 key={item.title}>{item.title}</h3>
                    {item.data.map((n, i)=>(
                        <span key={i}>
                            <input type={item.title === 'Country' ? 'radio' : 'checkbox'} name={item.title} id={n} onChange={(e) => handleChange(e,n,item.title)}/>{ n }
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default connect(null,{fillingSeries,fillingCountry,fillingYear,cleaningSeries,cleaningCountry,cleaningYear})(Menu);