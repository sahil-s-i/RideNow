import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-item-center">
                    <div>
                        <img src={CarPng} alt="car png image" />
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold font-serif">About us</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
