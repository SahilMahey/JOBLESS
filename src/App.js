import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import Navbar from './Pages/Navbar/Navbar.tsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error.js'
function App() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
      console.log(response)
       if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
       const records = await response.json();
       console.log(records)
      setArray(records);
    }
     getRecords();
     return;
  }, [array.length]);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
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
