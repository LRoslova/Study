import React from "react";

const Meaning = ({item}) =>{
    const listItems = item.definitions.map((index) =>
        <li>{index.definition}</li>
    );
    return (
        <div className={'cardField'}>
            <p className={'partspeech'}>Part of speech: {item.partOfSpeech}</p>
            <ul>{listItems}</ul>
        </div>

    )
}

export default Meaning;