import React from 'react'
import Search from "../components/Search"
import Sidebar from "../components/Sidebar"


export default function Team({children}) {
    return (
        <>
            <div className="grid grid-cols-6 h-screen">
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-5">
                    <Search />
                    {
                        children
                    }
                </div>
            </div>
        </>
    )
}
