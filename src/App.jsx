import React from "react"

import Footer from "./components/footer/footer"
import Header from "./components/header/Header"


import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";


const Layout =()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
     
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} ></Route>
        </Route>
        
     
  ))

  return (
   <div>
      <RouterProvider router={router} ></RouterProvider>
   </div>
  )
}

export default App
