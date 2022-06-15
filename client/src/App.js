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
import NewSupplier from "./components/newSupplier";

export default function App() {
  return (
       <BrowserRouter>
              <Routes>
                     <Route exact
                            path='/login'
                            element= {<Login />} />
                     <Route exact
                            path='/'
                            element= {<RouteController componet = {Home} />} />
                     <Route exact
                            path='/in'
                            element= {<RouteController componet = {In} />} />
                     <Route exact
                            path='/informs'
                            element= {<RouteController componet = {Informs} />} />
                     <Route exact
                            path='/Inventory'
                            element= {<RouteController componet = {Inventory} />} />
                     <Route exact
                            path='/out'
                            element= {<RouteController componet = {Out} />} />
                     <Route exact
                            path='/search'
                            element= {<RouteController componet = {Search} />} />
                     <Route exact
                            path='/suppliers'
                            element= {<RouteController componet = {Suppliers} />} />
                     <Route exact
                            path='/suppliers/new'
                            element= {<RouteController componet = {NewSupplier} />} />
              </Routes>
       </BrowserRouter>
  )
}
