import React from 'react'
import Card from "./Card"

export default function ShowMembers() {

    const cardList = [
        {
            image: "",
            name: "Jason Prince",
            position:"Admin",
            emailId: "janick_parisian@yahoo.com"
        },        
        {
            image: "",
            name: "Jukkoe Sisao",
            position:"CEO",
            emailId: "sibyl_kozey@gmail.com"
        },        
    ]
    return (
        <div>
            <h1>Team</h1>
            <button>Add New Member</button>
            {
                cardList.map(({image, name, position, emailId})=>{
                    return <Card image={image} name={name} position={position} emailId={emailId}/>
                })
            }
        </div>
    )
}
