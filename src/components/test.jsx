// export default function Test() {
//     return (
//         <div className="w-full">
//             <div className="bg-green-900 w-full h-auto py-4 px-4 md:h-[100px] flex flex-col md:flex-row justify-center items-center relative">
//                 <img 
//                     src="/logo.png" 
//                     alt="Logo"
//                     className="cursor-pointer h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full mb-2 md:mb-0 md:absolute md:left-4" 
//                 />
//                 <h2 className="text-white text-2xl md:text-4xl text-center md:text-left">
//                     Cab and Tour <span className="hidden sm:inline"> (Sri Lanka)</span>
//                 </h2>
//             </div>
//             <div>
//             <h1 className="text-red-700 text-6xl">Mathugama Express Cab Service</h1>
//             <p>Your Trusted Travel Partner for Local Tours & Tourism in Sri Lanka
//                 Discover the beauty of Sri Lanka with comfort, safety, and reliability. At Mathugama Express Cab Service, we specialize in local tours, airport transfers, and customized travel experiences across the island. Whether you're exploring the golden beaches, misty mountains, or cultural heritage sites, our professional drivers and well-maintained vehicles ensure a smooth and memorable journey.
//                 ✅ 24/7 Service | 🚗 Comfortable Rides | 🌴 Local Expertise</p>
//             </div>
//         </div>
//     );
// }

export default function Test() {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Header */}
            <div className="bg-green-900 w-full py-4 px-4 md:py-6 md:px-10 flex flex-col md:flex-row items-center justify-center relative">
                <img 
                    src="/logo.png" 
                    alt="Logo"
                    className="cursor-pointer h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full mb-4 md:mb-0 md:absolute md:left-10"
                />
                <h2 className="text-white text-2xl md:text-4xl font-semibold text-center md:text-left">
                    Cab and Tour <span className="hidden sm:inline"> (Sri Lanka)</span>
                </h2>
            </div>

            {/* Content Section */}
            <div className="px-4 py-10 md:px-20 md:py-16 text-center md:text-left">
                <h1 className="text-green-900 text-3xl md:text-6xl font-bold mb-6">
                    Mathugama Express Cab Service
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
                    Your Trusted Travel Partner for Local Tours & Tourism in Sri Lanka.
                    <br /><br />
                    Discover the beauty of Sri Lanka with comfort, safety, and reliability. At <strong>Mathugama Express Cab Service</strong>, we specialize in local tours, airport transfers, and customized travel experiences across the island.
                    <br /><br />
                    Whether you're exploring the golden beaches, misty mountains, or cultural heritage sites, our professional drivers and well-maintained vehicles ensure a smooth and memorable journey.
                    <br /><br />
                    ✅ 24/7 Service | 🚗 Comfortable Rides | 🌴 Local Expertise
                </p>
            </div>
        </div>
    );
}
