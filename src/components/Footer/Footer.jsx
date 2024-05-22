import React from 'react'
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div className="container">
                <div className="grid grid-cols-3 py-5">
                    {/* company details  */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Car Rental</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt corrupti hic dolorum ex?</p>
                        <br />
                        <div>
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div>
                            <FaMobileAlt />
                            <p>+91 123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
