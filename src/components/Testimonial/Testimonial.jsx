import React from 'react';
import person1 from "../../assets/Testimonial-images/person1.jpg";
import person2 from "../../assets/Testimonial-images/person2.jpg";
import person3 from "../../assets/Testimonial-images/person3.jpg";

const TestimonialsData = [
    {
        name: "Dilshad",
        image: person1,
        description: "The rental process was smooth and hassle-free. The car was in excellent condition and the customer service was top-notch.",
        aosDelay: "0",
    },
    {
        name: "Satya",
        image: person2,
        description: "I had a fantastic experience with this car rental service. The staff was friendly and helpful, and the prices were very reasonable.",
        aosDelay: "300",
    },
    {
        name: "Sabir",
        image: person3,
        description: "Excellent service and a great selection of vehicles. I highly recommend them for anyone in need of a reliable rental car.",
        aosDelay: "1000",
    },
];


function Testimonial() {
    return (
        <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
            <div className="container">
                {/* header  */}
                <div className="space-y-4 pb-12">
                    <p data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif">What Our Clients Say About Us</p>
                    <p data-aos="fade-up" className="text-center sm:px-44">Our customers love our service and quality. Read their testimonials to see why they choose us for their car rental needs.{" "} </p>
                </div>
                {/* card section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
                    {
                        TestimonialsData.map((data) => {
                            return <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.name} className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg">
                                <div className="grid place-items-center">
                                    <img src={data.image} className="h-20 w-20 rounded-full" alt="Person Image" />
                                </div>
                                <div className="text-2xl">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>{data.description}</p>
                                <p className="font-semibold text-center">{data.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial
