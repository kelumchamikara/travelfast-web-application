export default function CustomerHome() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Full-width top image */}
            <div className="w-full h-screen">
                <img
                    src="/beach.jpeg"
                    alt="Beach"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Our Services Section */}
            <section className="py-12 bg-gray-100 px-4 md:px-16">
    <h1 className="text-4xl font-bold mb-8 text-gray-800 text-left">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <img src="/poster1.jpeg" alt="poster1" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/airportdrop.jpeg" alt="airportdrop" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/weddingcar.jpg" alt="weddingcar" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/bmw (1).jpg" alt="classiccar" className="w-full h-auto rounded-lg shadow-md" />
    </div>
</section>


            {/* About Sri Lanka Section */}
            <section className="py-20 px-4 md:px-24 bg-white">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
                    {/* Left Side - Heading */}
                    <div className="md:w-1/3 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-900">ABOUT SRI LANKA</h1>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Paradise is still the most commonly used word to describe Sri Lanka – a lush, tropical island of golden beaches and brilliant
                            blue waters. Visitors planning a Sri Lanka travel adventure can choose between a variety of activities from lazing on the beach
                            to diving in coral reefs and observing the wildlife to exploring ancient temples and ruins.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}




