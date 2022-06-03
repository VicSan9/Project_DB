import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Container>
    </BrowserRouter>
  )
}
