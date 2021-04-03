import React from 'react'
import { Link } from "react-router-dom"
import Image1 from "../images/Bitmap-0.png"
import Image2 from "../images/Bitmap-1.png"
import Image3 from "../images/Bitmap-2.png"
import Image4 from "../images/Bitmap-3.png"
import Image5 from "../images/Bitmap-4.png"
import Image6 from "../images/Bitmap-5.png"
import Image7 from "../images/Bitmap-6.png"
import Image8 from "../images/Bitmap-7.png"
import Image0 from "../images/Bitmap.png"
import Card from "./Card"

export default function ShowMembers() {

    const cardList = [
        {
            image: Image0,
            name: "Jason Prince",
            position:"Admin",
            emailId: "janick_parisian@yahoo.com"
        },        
        {
            image: Image1,
            name: "Jukkoe Sisao",
            position:"CEO",
            emailId: "sibyl_kozey@gmail.com"
        },        
        {
            image: Image2,
            name: "Harriet King",
            position:"CTO",
            emailId: "nadia_block@hotmail.com"
        },        
        {
            image: Image3,
            name: "Lenora Benson",
            position:"Lead",
            emailId: "feil.wallace@kunde.us"
        },        
        {
            image: Image4,
            name: "Olivia Reese",
            position:"Strategist",
            emailId: "kemmer.hattie@cremin.us"
        },        
        {
            image: Image5,
            name: "Bertha Valdez",
            position:"CEO",
            emailId: "loraine.koelpin@tromp.io"
        },        
        {
            image: Image6,
            name: "Harriett Payne",
            position:"Digital Marketer",
            emailId: "nannie_west@estrella.tv"
        },        
        {
            image: Image7,
            name: "George Bryant",
            position:"Social Media",
            emailId: "delmer.kling@gmail.com"
        },        
        {
            image: Image8,
            name: "Lily French",
            position:"Strategist",
            emailId: "lucienne.herman@hotmail.com"
        },        
    ]
    return (
        <div className="bg-purple-50 w-full h-full p-6">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Team</h1>
                <Link to="/add">
                    <button className="bg-blue-600 rounded-lg text-white font-bold text-sm p-4">Add New Member</button>
                </Link>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    {
                        cardList.map(({image, name, position, emailId})=>{
                            return <Card image={image} name={name} position={position} emailId={emailId}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
