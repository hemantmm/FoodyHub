"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {

    const [showSidebar,setShowSidebar]=useState(false)

    const links=[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Recipe",
            path:"/recipe"
        },
        {
            name:"Contact",
            path:"/contact"
        },
        {
            name:"Login",
            path:"/login"
        },
    ]

    function closeSidebar()
    {
        setShowSidebar(false)
    }

  return (
    <>
    <div className='navbar container'>
        <a href='#' className='logo'>F<span className='logos'>oo</span>dyHub</a>
        <div className='nav-links'>
            {links.map(link=>(
                <a href='#' key={link.name}>{link.name}</a>
            ))}
        </div>
        <div onClick={()=>setShowSidebar(true)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links} /> }
    </>
    )
}

export default Navbar