import React from 'react'
import CameraImage from "../images/camera.png"

export default function Details() {
    return (
        <form className="my-10 bg-white p-10 rounded shadow text-center">
            <img className="mx-auto" src={CameraImage} alt="camera"/>
            <button className="text-blue-600">Upload Photo</button>
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-sm font-medium text-gray-500 text-left">First Name</label>
                            <input type="text" name="first_name" placeholder="Enter your first name" id="first_name" autocomplete="given-name" class="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md " />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-sm font-medium text-gray-500 text-left">Last Name</label>
                            <input type="text" name="last_name" placeholder="Enter your last name" id="last_name" autocomplete="family-name" class="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="email_address" class="block text-sm font-medium text-gray-500 text-left">Your Email</label>
                            <input type="text" name="email_address" placeholder="Enter your email" id="email_address" autocomplete="email" class="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="email_address" class="block text-sm font-medium text-gray-500 text-left">Phone Number</label>
                            <input type="text" name="email_address" placeholder="Enter your phone number" id="phone_number" autocomplete="phone-no" class="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="email_address" class="block text-sm font-medium text-gray-500 text-left">Position</label>
                            <input type="text" name="email_address" placeholder="CEO" id="pos" autocomplete="pos" class="mt-1  block w-full shadow-sm sm:text-sm border-gray-700 p-5 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="country" class="block text-sm font-medium text-gray-700 text-left">Gender</label>
                            <select id="country" name="country" autocomplete="country" class="mt-1 block w-6/12 p-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class=" py-3 sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Now
                    </button>
                </div>
        </form>
    )
}
