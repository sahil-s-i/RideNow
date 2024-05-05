import React from "react";

const Hero = () => {
    return <div className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px]">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 ">
                <div>
                    <img src={carpng} alt="" />
                </div>
                <div>
                    <p>Effortless</p>
                    <h1>Car Rental</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, veniam eum reprehenderit accusantium nihil quibusdam incidunt assumenda dolorum!</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;
