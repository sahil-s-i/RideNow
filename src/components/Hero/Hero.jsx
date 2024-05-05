import React from "react";

const Hero = () => {
    return <div className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 ">
                <div className="order-1 sm:order-2">
                    <img src={carpng} alt="" />
                </div>
                <div className="order-2 sm:order-1">
                    <p className="text-primary text-2xl font-serif">Effortless</p>
                    <h1 className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;
