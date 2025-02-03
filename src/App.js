import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import InputUrl from './components/inputUrl/inputUrl';
import Register from './components/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inputUrl" element={<InputUrl />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;