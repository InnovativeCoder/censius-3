import React, { useState } from 'react';
import firebase from '../firebase.js';
import CameraImage from "../images/camera.png";

export default function Details() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [position, setPosition] = useState("")
    const [emailId, setEmailId] = useState("")
    const [gender, setGender] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = firstName+ " " + lastName
        const itemsRef = firebase.database().ref('items');
        const item = {
            image: "",
            name,
            position,
            emailId
        }
        itemsRef.push(item);
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setPosition('')
        setEmailId('')
        setGender('')
    }

    return (
        <form className="my-10 bg-white p-10 rounded shadow text-center" onSubmit={handleSubmit}>
            <img className="mx-auto" src={CameraImage} alt="camera"/>
            <h1 className="text-blue-600">Upload Photo</h1>
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-500 text-left">First Name</label>
                            <input type="text" name="firstName" placeholder="Enter your first name" onChange={(e)=>{setFirstName(e.target.value)}}  value={firstName} id="first_name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md " />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-500 text-left">Last Name</label>
                            <input type="text" name="last_name" placeholder="Enter your last name" id="last_name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} className="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-500 text-left">Your Email</label>
                            <input type="text" name="email_address" placeholder="Enter your email" id="email_address" onChange={(e)=>{setEmailId(e.target.value)}} value={emailId} className="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-500 text-left">Phone Number</label>
                            <input type="text" name="phoneNumber" placeholder="Enter your phone number" id="phone_number" onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phoneNumber} className="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="position" className="block text-sm font-medium text-gray-500 text-left">Position</label>
                            <input type="text" name="position" placeholder="CEO" id="pos" onChange={(e)=>{setPosition(e.target.value)}} value={position} className="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 text-left">Gender</label>
                            <select id="gender" name="gender" onChange={(e)=>{setGender(e.target.value)}} value={gender} className="mt-1 block w-6/12 p-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className=" py-3 sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Now
                    </button>
                </div>
        </form>
    )
}
