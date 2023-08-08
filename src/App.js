import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Table from './Pages/Table/Table';
import Compression from './Pages/Compression/Compression';
import { useEffect } from 'react';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<> <Login /></>} />
          <Route path='/Dashboard' element={<><Dashboard /></>} />
          <Route path='/table' element={<><Table /></>} />
          <Route path='/compression' element={<><Compression /></>} />


        </Routes>
      </BrowserRouter>
     

    </div>

  );
}

export default App;
