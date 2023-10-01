import React, { useState }  from 'react';
import './CourseInput.css'

export default function CourseInput ({ input, setInput, valid, setValid }) {

    function handleinputvalue (Event) {
        setInput(Event.target.value);
        if(Event.target.value.trim().length === 0){
            setValid(false);
        }
        else{
            setValid(true);

        }
    }
    return (
        <div>
            <h2>Course Goal</h2>
            <input style={{borderColor: valid ? 'white' : ' lightpink'}} 
            type="text" className="courseinput" value={input} onChange={handleinputvalue}></input>
        </div>
        
    );
}