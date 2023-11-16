import React from 'react'; 
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
         <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
          </Routes>
         </Router>
  );
}

export default App;
