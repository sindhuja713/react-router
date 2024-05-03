
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './componenets/router/Home';
import About from './componenets/router/About';
import Blogs from './componenets/router/Blogs';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/blogs' element={<Blogs />} />
   </Routes>
   
   </BrowserRouter>
  );
};

export default App;