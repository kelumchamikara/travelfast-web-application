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
        },
        {
            title: "Polonnaruwa",
            image: "/holidayPlanes/Polonnaruwa.jpg",
            description: "Polonnaruwa, Sri Lanka’s ancient royal capital, showcases magnificent ruins, sacred temples, and colossal Buddha statues. This UNESCO World Heritage Site offers a captivating journey through history, culture, and architecture—making it a must-visit destination for heritage lovers and curious travelers alike."
        },
        {
            title: "Arugambay",
            image: "/holidayPlanes/Arugambay.jpg",
            description: "Arugam Bay, Sri Lanka’s laid-back surf haven, boasts golden beaches, world-class waves, and a vibrant coastal culture. Beyond surfing, visitors can explore Elephant Rock, enjoy lagoon safaris, and savor fresh seafood, making it a perfect blend of adventure and relaxation."
        },
        {
            title: "Unawatuna",
            image: "/holidayPlanes/Unawatuna.jpg",
            description: "Unawatuna, a coastal gem in southern Sri Lanka, offers golden beaches, crystal-clear waters, and vibrant marine life. Perfect for swimming, snorkeling, and relaxing, it blends natural beauty, rich culture, and a laid-back vibe—ideal for beach lovers and adventure seekers."
        },
        {
            title: "Mirissa",
            image: "/holidayPlanes/Mirissa.jpg",
            description: "Mirissa, a serene coastal town in southern Sri Lanka, boasts golden beaches, turquoise waters, and vibrant marine life. Renowned for whale watching, surfing, and its relaxed atmosphere, it's an ideal destination for beach lovers and adventure seekers alike."
        },
        {
            title: "Bentota",
            image: "/holidayPlanes/Bentota.jpg",
            description: "Bentota, a coastal gem on Sri Lanka’s southwest coast, offers golden beaches, tranquil lagoons, and lush landscapes. Ideal for water sports, river safaris, and cultural exploration, it’s a perfect blend of relaxation and adventure for all travelers."
        },
        {
            title: "Udawalawe",
            image: "/holidayPlanes/Udawalawe.jpg",
            description: "Udawalawe, located in the southern part of Sri Lanka, is renowned for its national park, offering a pristine habitat for elephants and diverse wildlife. The park features lush landscapes, serene lakes, and exciting safaris, making it a top eco-tourism destination."
        },
        {
            title: "Kumana",
            image: "/holidayPlanes/Kumana.jpg",
            description: "Kumana, situated in the southeast of Sri Lanka, is famous for the Kumana National Park, a birdwatcher’s paradise. Home to diverse bird species, including migratory ones, the park features scenic wetlands, forests, and stunning lagoons, ideal for nature lovers and wildlife enthusiasts."
        },
        {
            title: "Wilpattu",
            image: "/holidayPlanes/Wilpattu.jpg",
            description: "Wilpattu, Sri Lanka’s largest national park, is a haven for wildlife enthusiasts. Known for its unique villus (natural lakes), the park is home to leopards, elephants, and diverse bird species. Its serene landscapes and dense forests make it a prime safari destination."
        },
        {
            title: "Ella Demodara",
            image: "/holidayPlanes/EllaDemodara.jpg",
            description: "Demodara, nestled in Sri Lanka’s hill country, is famous for its unique railway loop and the stunning Nine Arches Bridge. Surrounded by lush greenery, it offers scenic hikes like Ella Rock and captivating views, making it a must-visit destination."
        },
        {
            title: "Nuwara-Eliya",
            image: "/holidayPlanes/Nuwara-Eliya.jpg",
            description: "Nuwara Eliya, known as Little England, is a charming hill station in Sri Lanka. With its cool climate, colonial architecture, and scenic landscapes, it offers attractions like Horton Plains, Gregory Lake, and lush tea plantations, making it a top destination."
        },
        {
            title: "Pinnawala",
            image: "/holidayPlanes/Pinnawala.jpg",
            description: "Pinnawala, located in Sri Lanka’s Sabaragamuwa Province, is famous for its Elephant Orphanage, home to the world’s largest herd of captive Asian elephants. Visitors can enjoy watching elephants being fed and bathed, making it a must-see wildlife experience."
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