import React from "react";
import carpng from "../../assets/car.jpeg";

const Hero = () => {
    return <div className="dark:bg-black dark:text-white duration-300 ">
        <div className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 ">
                <div className="order-1 sm:order-2">
                    <img src={carpng} alt="" className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" />
                </div>
                <div className="order-2 sm:order-1  space-y-5 sm:pr-32">
                    <p className="text-primary text-2xl font-serif">Effortless</p>
                    <h1 className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="btn btn-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Get Started</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;
