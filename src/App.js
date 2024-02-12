import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect} from 'react';
import Navbar from './Pages/Navbar/Navbar.tsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error.js'
function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/data');
        setArray(response.data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  const add_array  = (item) => {
   
    item = 
    {
      name: item.Name,
      company: item.Company,
      Time: item.Time,
      date: item.Date,
    }
    let newArr=[...array,item];
    setArray(newArr);
  }
  
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
