import React from 'react'
import ShowMembers from "../components/ShowMembers"
import Layout from "./Layout"


export default function Team() {
    return (
        <>
            <div>
                <Layout children={<ShowMembers />}/>
            </div>
        </>
    )
}
