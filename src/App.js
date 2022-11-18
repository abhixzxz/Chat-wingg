import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import Create from './Components/Create/Create';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
