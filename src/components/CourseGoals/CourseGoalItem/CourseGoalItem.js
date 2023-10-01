import React, { useState } from 'react';
import CourseGoalList from '../CourseGoalList/CourseGoalList';
import './CourseGoalItem.css'

export default function CourseGoalItem ({ input, setInput, items, setItems, valid, setValid }) {

    function handleAddGoalButton () {
        if(input){
            const newId = (items.length + 1).toString();
            const newGoal = {
            id: newId,
            activity: input
        };
        setItems(items => [...items, newGoal]);
        setInput('');
        }
        else{
            setValid(false);
        }
    }
    return (
        <div>
            <button className='goalbutton' onClick ={handleAddGoalButton}>Add Goal</button>
            <CourseGoalList items={items} setItems={setItems} />
        </div>
    );
}