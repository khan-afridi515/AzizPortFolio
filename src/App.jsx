import React, {useState} from 'react'
import Port from './port';
import Service from './service/service';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



const App = () => {
    
  const[sNumber, setSNumber]=useState();
  const[name, setName]=useState();
  const [detail, setDetail]=useState();

  const sendDetails = (work, number) =>{
    console.log("This is the details",work.name, work.details);
     setSNumber(number+1);
     setName(work.name);
     setDetail(work.details);
  }
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Port sendItem={sendDetails}/>}></Route>
        <Route path='/service'element={<Service digit={sNumber} title={name} explain={detail}/>}></Route>
      </Routes>
      
      </Router>
      
      <p className='text-red-500'>This is my portfolio website</p>
    </div>
  )
}

export default App
