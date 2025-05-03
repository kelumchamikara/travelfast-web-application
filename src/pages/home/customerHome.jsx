export default function CustomerHome() {
    return (
        <div className="bg-white w-full min-h-screen px-4 py-10 md:px-20 md:py-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-green-900 text-3xl md:text-5xl font-bold mb-6">
                        Mathugama Express Cab Service
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Your Trusted Travel Partner for Local Tours & Tourism in Sri Lanka.
                        <br /><br />
                        Discover the beauty of Sri Lanka with comfort, safety, and reliability. At <strong>Mathugama Express Cab Service</strong>, we specialize in local tours, airport transfers, and customized travel experiences across the island.
                        <br /><br />
                        Whether you're exploring the golden beaches, misty mountains, or cultural heritage sites, our professional drivers and well-maintained vehicles ensure a smooth and memorable journey.
                        <br /><br />
                        ✅ 24/7 Service | 🚗 Comfortable Rides | 🌴 Local Expertise
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img 
                        src="/airportdrop.jpeg" 
                        alt="Airport Drop"
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
