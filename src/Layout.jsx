// import React from 'react'

import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
    <Header />
    <Outlet />  
    <Footer />
    </>
  )
}

export default Layout

// our purpose for this layout is that we have to change only the middle content in our page such that header and footer remains at their place, so  there are ways to do it , such as for each component you pass header and footer but it is not optimizws and hence there is something called Outlet which is provided by react-router-dom for such tasks.