import React from 'react'
import Hamburger from "../components/HamBurger"
import Search from "../components/Search"
import Sidebar from "../components/Sidebar"
import "./Layout.css"

export default function Team({children}) {
    return (
        <>
            <div className="grid grid-cols-6 h-screen">
                <div className="col-span-1 sidebar">
                    <Sidebar />
                    hello hello
                </div>
                <div className="col-span-5">
                    <div className="hamburger">
                        <Hamburger />
                    </div>
                    <Search />
                    {
                        children
                    }
                </div>
            </div>
        </>
    )
}
