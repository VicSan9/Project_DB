import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import RouteController from "./components/RouteController";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
               element={<RouteController component = {Home} />}  />
        <Route path='/login'
               element={<RouteController component = {Login} />} />
      </Routes>
    </BrowserRouter>
  )
}
