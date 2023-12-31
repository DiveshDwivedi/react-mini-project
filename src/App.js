import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Profile } from './Pages/Profile';
import { Menu } from './Pages/Menu';
import { Navbar } from './Header/Navbar';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
    const [username, setUsername] = useState('Divesh');
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='*' element={<h1> Page Not Found </h1>} />
      </Routes>
     </Router>
     </AppContext.Provider>
    </div>
  );
}

export default App;
