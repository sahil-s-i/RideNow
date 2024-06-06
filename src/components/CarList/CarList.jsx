import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";


const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image: car1,
        aosDelay: "0",
        km: 12,
    },
    {
        name: "KIA UX",
        price: 140,
        image: car2,
        aosDelay: "500",
        km: 20,
    },
    {
        name: "BMW",
        price: 100,
        image: car3,
        aosDelay: "1000",
        km: 15,
    },
]
const CarList = () => {
    return (
        <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/* heading  */}
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">Our Premium Car Selection</h1>
                <p data-aos="fade-up" className="text-sm pb-10">Explore our diverse range of high-quality vehicles designed to provide you with the ultimate driving experience. Whether for business or leisure, we have the perfect car for you.</p>
                {/* Car listing cards  */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {CarListData.map((data) => {
                            return (
                                <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                                    <div className="w-full h-[120px]">
                                        <img className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700" src={data.image} alt="Car image" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-primary font-semibold">
                                            {data.name} -- ${data.price}/Day - {data.km}Km
                                        </h1>
                                        <div className="flex justify-between items-center text-xl font-semibold">
                                            <a href="#">Details</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* End of Car listing cards  */}
                {/* Button  */}
                <div className="grid place-content-center mt-8">
                    <button data-aos="fade-up" className="button-outline">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarList;
