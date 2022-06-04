import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar"
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Container>
    </BrowserRouter>
  )
}
