import React from 'react';
import CarPng from "../../assets/car1.png";

const About = () => {
    return (
        <div className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px]">
            <div className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
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
