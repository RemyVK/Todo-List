import React, { useState } from 'react';
import './App.css'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalItem from './components/CourseGoals/CourseGoalItem/CourseGoalItem';


export default function Todo () {

  const[input, setInput] = useState('');
  const[items, setItems] = useState('');
  const[valid, setValid] = useState(true);


  return (
      <div className='todos'>
        <CourseInput input={input} setInput={setInput} valid ={valid} setValid={setValid}/>
        <CourseGoalItem input={input} setInput={setInput} items={items} setItems={setItems} valid ={valid} setValid={setValid}/>
      </div>
  );
}