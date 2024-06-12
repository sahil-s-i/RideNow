import React from 'react';
import CarPng from "../../assets/car1.png";

const About = () => {
    return (
        <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div data-aos="slide-right" data-aos-duration="1500">
                        <img src={CarPng} alt="car png image" className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
                    </div>
                    <div className="space-y-5 sm:p-16 pb-6">
                        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">About us</h1>
                        <p data-aos="fade-up">Welcome to RideNow Website, your trusted partner in reliable and affordable car rentals. With years of experience in the industry, we pride ourselves on offering top-notch service and a diverse fleet of vehicles to meet your every need.</p>
                        <p data-aos="fade-up">Our mission is to provide you with a seamless and enjoyable car rental experience. Whether you're traveling for business or leisure, we have the perfect car for you. Our team is dedicated to ensuring your satisfaction, with 24/7 support and convenient locations across the city.</p>
                        <button data-aos="fade-up" className="button-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
