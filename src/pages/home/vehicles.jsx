import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aqua from "../../assets/vehicles/Aqua.jpeg";
import KDH from "../../assets/vehicles/KDH.jpeg";
import Allion from "../../assets/vehicles/Allion.jpeg";
import BMW from "../../assets/vehicles/BMW.jpg";
import Coaster from "../../assets/vehicles/Coaster.jpeg";
import FitShuttle from "../../assets/vehicles/Fit Shuttle.jpeg";

export default function Vehicles() {
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('/vehiclebook');
    };

    return (
        <div className="bg-white min-h-screen px-4 py-10 md:px-20">
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto mb-16"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">
                    Our Vehicles At Your Service
                </h1>
                <div className="text-center">
                    <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
                        Comfort, Safety, and Reliability in Every Ride
                    </h2>
                    <p className="text-gray-700 mb-2">
                        At D & M Travel Fast, our diverse fleet is ready to serve your every travel need.
                    </p>
                    <p className="text-gray-700 mb-2">
                        From comfortable sedans and spacious SUVs to luxury cars, vans, and minibuses, we offer well-maintained vehicles that suit every occasion—
                        be it daily commutes, business travel, airport transfers, weddings, or long-distance journeys.
                    </p>
                    <p className="text-gray-700 mb-2">
                        Each vehicle is equipped with modern amenities, regularly serviced for safety,
                        and driven by professional, courteous chauffeurs committed to delivering a smooth and enjoyable ride.
                    </p>
                    <p className="text-gray-700">
                        Whatever your destination, our vehicles are at your service—because your journey deserves nothing but the best.
                    </p>
                </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl md:text-2xl font-semibold text-left text-gray-800 mb-10"
            >
                Vehicle Collections
            </motion.h2>

            {/* Vehicle Cards */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {[
                    { name: "Aqua", image: Aqua, label: "Book Our Aqua Car" },
                    { name: "KDH", image: KDH, label: "Book Our KDH Flatroof Van" },
                    { name: "Allion", image: Allion, label: "Book Our Allion Car" },
                    { name: "BMW", image: BMW, label: "Book Our BMW Car" },
                    { name: "Coaster", image: Coaster, label: "Book Our Coaster Bus" },
                    { name: "Fit Shuttle", image: FitShuttle, label: "Book Our Fit Shuttle Car" },
                ].map((vehicle, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img src={vehicle.image} alt={vehicle.name} className="w-full" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-green-900">{vehicle.label}</h3>
                            <button
                                onClick={handleBook}
                                className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}