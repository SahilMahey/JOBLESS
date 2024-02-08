import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Pages/Navbar/Navbar.tsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error.js'
function App() {
  const [array, setArray] = useState([]);
  
  
  const add_array = (form) => {
    console.log(form)
    
    const newJob = {
      jobPosition: form.name, // Replace with the actual job position
      jobCompany: form.Company, // Replace with the actual job company
      RejectionDate: form.Date,
      RejectionTime: form.Time
    };
    
    
    // Create a new array with the updated job list
    const newJobList = [...array, newJob];

    // Update the state with the new job list
    setArray(newJobList); 
  };
  return (
    <>
    <BrowserRouter>
    <Navbar add_array = {add_array}/>
    <Routes>
      <Route  path ="/" element={ <Home array = {array}/>}/>
      <Route path="Home" element={<Home array = {array}/>} />
      <Route path="About" element={<About />} />
      <Route path = "*" element ={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
