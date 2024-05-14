import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";


const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image: whiteCar,
        aosDelay: "0",
    },
    {
        name: "KIA UX",
        price: 140,
        image: car2,
        aosDelay: "500",
    },
    {
        name: "BMW UX",
        price: 100,
        image: car3,
        aosDelay: "1000",
    },
]
const CarList = () => {
    return (
        <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/* heading  */}
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">Lorem, ipsum dolor.</h1>
                <p data-aos="fade-up" className="text-sm pb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime.</p>
                {/* Car listing cards  */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {
                            CarListData.map((car) => {
                                <div>
                                    <div>
                                        <img src={car.image} alt="" />
                                    </div>
                                    <div>
                                        <h1>
                                            {data.name}
                                        </h1>
                                        <div>
                                            <p>${data.price}/Day</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList
