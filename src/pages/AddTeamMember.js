import React from 'react'
import AddMember from "../components/AddMember"
import Layout from "./Layout"

export default function AddTeamMember() {
    return (
        <div>
            <Layout children={<AddMember />}/>
        </div>
    )
}
