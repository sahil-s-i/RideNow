import React from 'react';

const TestimonialsData = [
    {
        name: "Dilshad",
        image: "",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        aosDelay: "0",
    },
    {
        name: "Satya",
        image: "",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        aosDelay: "300",
    },
    {
        name: "Sabir",
        image: "",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        aosDelay: "1000",
    },
]

function Testimonial() {
    return (
        <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
            <div className="container">
                {/* header  */}
                <div className="space-y-4 pb-12">
                    <p data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif">What Our Clients Say About Us</p>
                    <p data-aos="fade-up" className="text-center sm:px-44">Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "} </p>
                </div>
                {/* card section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
                    {
                        TestimonialsData.map((data) => {
                            return <div key={data.name}>
                                <div className="grid place-items-center">
                                    <img src="https://picsum.photos/200" className="h-20 w-20 rounded-full" alt="" />
                                </div>

                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial
