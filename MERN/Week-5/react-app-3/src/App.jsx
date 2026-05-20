// import React from 'react' this is no longer necessary in React 17 and later versions, 
// as JSX transformation does not require React to be in scope. However, you can still 
// import it if you need to use React features directly.
import {createBrowserRouter, RouterProvider, Navigate} from "react-router"
import Root_Layout from "./components/Root_Layout"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Java from "./components/Java"
import NodeJS from "./components/NodeJS"
import Vue from "./components/Vue"
import Technologies from "./components/Technologies"

function App() {
    //adding routing config
    const routerObj=createBrowserRouter([
        {
            path:"/",
            element:<Root_Layout />,
            children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"register",
                    element:<Register />
                },
                {
                    path:"login",
                    element:<Login />
                },
                {
                    path:"technologies",
                    element:<Technologies />,
                    children:[
                        {
                            index:true,
                            // element:<div className="text-center text-[25px]">Select a technology to view details</div>
                            element: <Navigate to="vue" replace/>
                        },
                        {
                            path:"java",
                            element:<Java />
                        },
                        {
                            path:"nodejs",
                            element:<NodeJS />
                        },
                        {
                            path:"vue",
                            element:<Vue />
                        },
                    ]
                },
            ]
        }
    ])


  return (
    // <div className="text-3xl text-amber-500">App</div>
    <RouterProvider router={routerObj}/>
  )
}

export default App

// use rfce from the extension to create a functional component template. 
// This will save you time and ensure consistency in your code.