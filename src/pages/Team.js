import React from 'react'
import Search from "../components/Search"
import ShowMembers from "../components/ShowMembers"
import Sidebar from "../components/Sidebar"


export default function Team() {
    return (
        <div>
            <Sidebar />
            <Search />
            <ShowMembers />
        </div>
    )
}
