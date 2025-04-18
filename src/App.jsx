import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Participantes from "../pages/Participantes";
import Sobre from "../pages/Sobre";


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/participantes" element={<Participantes/>} />
      <Route path="/sobre" element={<Sobre/>} />
    </Routes>
   </Router>
  )
}

export default App