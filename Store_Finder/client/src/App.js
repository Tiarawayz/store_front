import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayStore from './components/DisplayStore';
import EditStore from './components/EditStore';
import OneStore from './components/OneStore';
import NewStore from './components/NewStore';

function App() {
  const [allStore, setAllStore] = useState([]);

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path='/' element={<DisplayStore allStore={allStore} setAllStore={setAllStore} />} />
        <Route path='/onestore/:id' element={<OneStore/>}></Route>
        <Route path='/editstore/:id' element={<EditStore/>} />
        <Route path='/newstore' element={<NewStore store={allStore} setStore={setAllStore} />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
