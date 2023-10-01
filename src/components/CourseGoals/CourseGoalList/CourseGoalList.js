import React, { useState } from 'react';
import './CourseGoalList.css'

export default function CourseGoalList ({ items, setItems } ) {
    function handleDisplayButton(id) {
            setItems(items => items.filter(item => item.id !== id));
        }

    function activityList() {
        return items.map(activities => {
            return (
                <button 
                    key={activities.id} 
                    className='display' 
                    onClick={() => handleDisplayButton(activities.id)}>
                    <h2>{activities.activity}</h2>
                </button>
            )
        });
    }
   
    return (
        <div className='my-goals'>
            {items.length > 0 && activityList()}
        </div>
    );
}   