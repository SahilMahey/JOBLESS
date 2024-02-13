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
        const response = await axios.get('/.netlify/functions/data');
        setArray(response.data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  const add_array  = async (item) => {
   
    
      const name =  item.Name
      const company = item.Company
      const date = item.Date

    

    try {
      const response = await fetch('/.netlify/functions/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,company,date }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
  
      const data = await response.json();
      console.log(data); // Do something with the response, like showing a success message or redirecting the user
    } catch (error) {
      console.error(error); // Handle error, show error message to the user, etc.
    }
    fetchData()
  }
  
 
  return (
    <>
    <BrowserRouter>
    <Navbar add_array = {add_array}/>
    <Routes>
    <Route  path ="/" element={ <Home array = {array} fetchData={fetchData}/>}/>
      <Route path="Home" element={<Home array = {array} fetchData={fetchData}/>} />
      <Route path="About" element={<About />} />
      <Route path = "*" element ={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
