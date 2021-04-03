import React from 'react'

export default function Card({image, name, position, emailId}) {
    return (
        <>
            <figure className="bg-white rounded-xl pt-10 overflow-hidden shadow">
                <img className="w-32 h-32 rounded-full mx-auto" src={image} alt="profile"/>
                <div className="p-10 text-center">
                    <figcaption className="font-medium">
                        <div className="text-black">
                            {name}
                        </div>
                        <div className="text-gray-500 text-sm">
                            {position}
                        </div>
                        <div className="text-gray-500 text-sm">
                            {emailId}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}
