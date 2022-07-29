import { useState, useEffect } from 'react';
import './App.css';

// creating a custom functional component and calling it inside the App function
// props (properties) allows to pass dynamic data through react components. They are written via attributes

const Person = (props) =>{
  return(
    // using a react fragment to write multi lines of code
    <>
    <h1> First Name: {props.firstName} </h1>
    <h2> Last Name: {props.lastname} </h2>
    <h3> About Me: {props.aboutMe} </h3>
    </>
  )
}


const App =()=>{

  const [counter, setCounter]= useState(0);

// using useEffect hooks
  useEffect(()=>{
    alert (' You have changed the counter to ' + counter);
  }, [counter] );

  // use of a dependency array [] in useEffect
  return (
    <div className='App'>

      <Person 
      firstName ="Alexander" 
      lastname='Okon' 
      aboutMe = {'I am a frontend developer'}
      />

      <button onClick={()=> setCounter((prevCount) => prevCount - 1)}> - </button>
      <h1> {counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount + 1)}> + </button>

    </div>

  )
}

export default App;
