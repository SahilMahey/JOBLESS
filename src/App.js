import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from 'react';
import Navbar from './Pages/Navbar/Navbar.tsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error.js'
function App() {
  const [array, setArray] = useState([]);
  
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
