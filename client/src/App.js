import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import In from "./components/In";
import Informs from "./components/Informs";
import Inventory from "./components/Inventory";
import Out from "./components/Out";
import Search from "./components/Search";
import Suppliers from "./components/Suppliers";
import RouteController from "./components/RouteController";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
               element= {<RouteController component = {Home} />} />
        <Route path='/login'
               element= {<RouteController component = {Login} />} />
        <Route path='/in'
               element= {<RouteController component = {In} />} />
        <Route path='/informs'
               element= {<RouteController component = {Informs} />} />
        <Route path='/Inventory'
               element= {<RouteController component = {Inventory} />} />
        <Route path='/out'
               element= {<RouteController component = {Out} />} />
        <Route path='/search'
               element= {<RouteController component = {Search} />} />
        <Route path='/suppliers'
               element= {<RouteController component = {Suppliers} />} />
      </Routes>
    </BrowserRouter>
  )
}
