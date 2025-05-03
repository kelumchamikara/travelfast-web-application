// export default function Vehicles(){
//     return(
//         <div>
//             <div className="bg-white min-h-screen px-4 py-10 md:px-20">
//             <h1 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-10">
//                 Our Vehicle Page
//             </h1>
//             <h2>Vehicle Collections</h2>
//             <div>
//             <img 
//                             src="/vehicles/Aqua.png" 
//                             alt="Aqua"
//                         />
//             <p>Book our Aqua car</p>
//             </div>
//             <div>
//             <img 
//                             src="/vehicles/KDH.png" 
//                             alt="KDH"
//                         />
//             <p>Book our KDH Flatroof Van</p>
//             </div>
//             </div>
//         </div>
//     )
// }

export default function Vehicles() {
    return (
        <div className="bg-white min-h-screen px-4 py-10 md:px-20">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-6">
                Our Vehicles
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-left text-gray-800 mb-10">
                Vehicle Collections
            </h2>

            {/* Vehicle Cards */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* Aqua Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/Aqua.jpeg" 
                        alt="Aqua"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our Aqua Car</h3>
                    </div>
                </div>

                {/* KDH Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/KDH.jpeg" 
                        alt="KDH"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our KDH Flatroof Van</h3>
                    </div>
                </div>

                {/* Allion Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/Allion.jpeg" 
                        alt="Allion"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our Allion Car</h3>
                    </div>
                </div>

                {/* BMW Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/BMW.jpg" 
                        alt="BMW"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our BMW Car</h3>
                    </div>
                </div>

                {/* Coaster Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/Coaster.jpeg" 
                        alt="Coaster"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our Coaster Bus</h3>
                    </div>
                </div>

                {/* Fit Shuttle Vehicle */}
                <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                        src="/vehicles/Fit Shuttle.jpeg" 
                        alt="Fit Shuttle"
                        className="w-full"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-green-900">Book Our Fit Shuttle Car</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

