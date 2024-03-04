import React from 'react'; 
import Welcome from "./pages/Welcome";
import About from './pages/About';
import Blog from './pages/Blog';
import Skill from './pages/Skills';
import Contac from './pages/Contact';
import Portifoli from './pages/Portifolio';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
         <Router>
          <Routes>
            <Route path='/Welcome' element={<Welcome/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Blogs' element={<Blog/>}></Route>
            <Route path='/Contact' element={<Contac/>}></Route>
            <Route path='/Portifolio' element={<Portifoli/>}></Route>
            <Route path='/Skills' element={<Skill/>}></Route>
          </Routes>
         </Router>
  );
}

export default App;
