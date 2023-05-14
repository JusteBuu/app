import React from 'react';
//import "./App.css";
import "./Components/style.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import About from "./Components/About";
import Main from "./Components/Main";
import { RouterProvider, createHashRouter } from 'react-router-dom';

function App() {


  const layout = (
    <>
      <Navbar />

      <Outlet />  
    </>
    
  )

  const router = createHashRouter([
    {
      element: layout,
      children: [
        {
          path: "/",
          element: <Main />,
        },
    
        {
          path: "/about",
          element: <About />,
        },
    
      ]
    }

  ])
	return (
      <RouterProvider router = {router}/>

	);
}

export default App;