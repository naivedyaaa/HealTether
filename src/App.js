import React from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";

import Sidebar from './components/Sidebar'
import PatientRecord from './components/PatientRecord'
import Header from './components/Header'
import WhatsappChat from './components/WhatsappChat'
App=()=>{
    return(
        <>
            <Sidebar/>
            <Header/>
            <Outlet/>
        </>
    )
}

const router=createBrowserRouter([
    {
        path:"/HealTether/",
        element:<App/>,
        children:[
            {
                path:"/HealTether/",
                element:<PatientRecord/>
            },
            {
                path:"whatsappchat",
                element:<WhatsappChat/>
            },
        ]
    }
])

const root =createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)
