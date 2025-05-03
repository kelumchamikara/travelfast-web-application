export default function HolidayPlan() {
    const locations = [
        {
            title: "Kandy - Sri Dalada Maligawa",
            image: "/holidayPlanes/Kandy.jpg",
            description: "Discover the sacred Sri Dalada Maligawa, home to the revered Tooth Relic of the Buddha. Nestled in Kandy, this majestic temple blends spiritual serenity, rich history, and stunning architecture—offering a profound cultural experience for every visitor."
        },
        {
            title: "Colombo",
            image: "/holidayPlanes/Colombo.jpg",
            description: "Colombo, Sri Lanka’s vibrant capital, blends colonial charm with modern life. Explore bustling markets, historic landmarks, lush parks, and golden beaches. With rich culture, diverse cuisine, and lively nightlife, Colombo offers an unforgettable urban experience for every kind of traveler."
        },
        {
            title: "Yala",
            image: "/holidayPlanes/Yala.jpg",
            description: "Yala National Park, Sri Lanka’s premier wildlife sanctuary, offers thrilling safaris through diverse landscapes teeming with leopards, elephants, and exotic birds. With stunning coastal views and rich biodiversity, Yala is a must-visit for nature enthusiasts and adventure seekers alike."
        },
        {
            title: "Sigiriya",
            image: "/holidayPlanes/Sigiriya.jpg",
            description: "Sigiriya, the iconic Lion Rock fortress, rises dramatically from Sri Lanka’s central plains. This UNESCO World Heritage Site features ancient frescoes, royal gardens, and breathtaking views—blending history, art, and nature into a truly unforgettable adventure for culture and nature lovers alike."
        }
        // Add more locations here if needed...
    ];

    return (
        <div className="bg-white min-h-screen px-4 py-10 md:px-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-10">
                Sri Lanka's Best Locations
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((loc, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
                        <img
                            src={loc.image}
                            alt={loc.title}
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-green-800 mb-2">{loc.title}</h2>
                            <p className="text-gray-700 text-sm">{loc.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
