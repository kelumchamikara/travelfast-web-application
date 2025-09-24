'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Kandy from '../../assets/holiday_plans/Kandy.jpg';
import Colombo from '../../assets/holiday_plans/Colombo.jpg';
import Yala from '../../assets/holiday_plans/Yala.jpg';
import Sigiriya from '../../assets/holiday_plans/Sigiriya.jpg';
import Polonnaruwa from '../../assets/holiday_plans/Polonnaruwa.jpg';
import Arugambay from '../../assets/holiday_plans/Arugambay.jpg';
import Unawatuna from '../../assets/holiday_plans/Unawatuna.jpg';
import Mirissa from '../../assets/holiday_plans/Mirissa.jpg';
import Bentota from '../../assets/holiday_plans/Bentota.jpg';
import Udawalawe from '../../assets/holiday_plans/Udawalawe.jpg';
import Kumana from '../../assets/holiday_plans/Kumana.jpg';
import Wilpattu from '../../assets/holiday_plans/Wilpattu.jpg';
import EllaDemodara from '../../assets/holiday_plans/EllaDemodara.jpg';
import NuwaraEliya from '../../assets/holiday_plans/Nuwara-Eliya.jpg';
import Pinnawala from '../../assets/holiday_plans/Pinnawala.jpg';



export default function HolidayPlan() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const locations = [
        {
            title: "Kandy - Sri Dalada Maligawa",
            image: Kandy,
            description: "Discover the sacred Sri Dalada Maligawa, home to the revered Tooth Relic of the Buddha. Nestled in Kandy, this majestic temple blends spiritual serenity, rich history, and stunning architecture—offering a profound cultural experience for every visitor."
        },
        {
            title: "Colombo",
            image: Colombo,
            description: "Colombo, Sri Lanka’s vibrant capital, blends colonial charm with modern life. Explore bustling markets, historic landmarks, lush parks, and golden beaches. With rich culture, diverse cuisine, and lively nightlife, Colombo offers an unforgettable urban experience for every kind of traveler."
        },
        {
            title: "Yala",
            image: Yala,
            description: "Yala National Park, Sri Lanka’s premier wildlife sanctuary, offers thrilling safaris through diverse landscapes teeming with leopards, elephants, and exotic birds. With stunning coastal views and rich biodiversity, Yala is a must-visit for nature enthusiasts and adventure seekers alike."
        },
        {
            title: "Sigiriya",
            image: Sigiriya,
            description: "Sigiriya, the iconic Lion Rock fortress, rises dramatically from Sri Lanka’s central plains. This UNESCO World Heritage Site features ancient frescoes, royal gardens, and breathtaking views—blending history, art, and nature into a truly unforgettable adventure for culture and nature lovers alike."
        },
        {
            title: "Polonnaruwa",
            image: Polonnaruwa,
            description: "Polonnaruwa, Sri Lanka’s ancient royal capital, showcases magnificent ruins, sacred temples, and colossal Buddha statues. This UNESCO World Heritage Site offers a captivating journey through history, culture, and architecture—making it a must-visit destination for heritage lovers and curious travelers alike."
        },
        {
            title: "Arugambay",
            image: Arugambay,
            description: "Arugam Bay, Sri Lanka’s laid-back surf haven, boasts golden beaches, world-class waves, and a vibrant coastal culture. Beyond surfing, visitors can explore Elephant Rock, enjoy lagoon safaris, and savor fresh seafood, making it a perfect blend of adventure and relaxation."
        },
        {
            title: "Unawatuna",
            image: Unawatuna,
            description: "Unawatuna, a coastal gem in southern Sri Lanka, offers golden beaches, crystal-clear waters, and vibrant marine life. Perfect for swimming, snorkeling, and relaxing, it blends natural beauty, rich culture, and a laid-back vibe—ideal for beach lovers and adventure seekers."
        },
        {
            title: "Mirissa",
            image: Mirissa,
            description: "Mirissa, a serene coastal town in southern Sri Lanka, boasts golden beaches, turquoise waters, and vibrant marine life. Renowned for whale watching, surfing, and its relaxed atmosphere, it's an ideal destination for beach lovers and adventure seekers alike."
        },
        {
            title: "Bentota",
            image: Bentota,
            description: "Bentota, a coastal gem on Sri Lanka’s southwest coast, offers golden beaches, tranquil lagoons, and lush landscapes. Ideal for water sports, river safaris, and cultural exploration, it’s a perfect blend of relaxation and adventure for all travelers."
        },
        {
            title: "Udawalawe",
            image: Udawalawe,
            description: "Udawalawe, located in the southern part of Sri Lanka, is renowned for its national park, offering a pristine habitat for elephants and diverse wildlife. The park features lush landscapes, serene lakes, and exciting safaris, making it a top eco-tourism destination."
        },
        {
            title: "Kumana",
            image: Kumana,
            description: "Kumana, situated in the southeast of Sri Lanka, is famous for the Kumana National Park, a birdwatcher’s paradise. Home to diverse bird species, including migratory ones, the park features scenic wetlands, forests, and stunning lagoons, ideal for nature lovers and wildlife enthusiasts."
        },
        {
            title: "Wilpattu",
            image: Wilpattu ,
            description: "Wilpattu, Sri Lanka’s largest national park, is a haven for wildlife enthusiasts. Known for its unique villus (natural lakes), the park is home to leopards, elephants, and diverse bird species. Its serene landscapes and dense forests make it a prime safari destination."
        },
        {
            title: "Ella Demodara",
            image: EllaDemodara,
            description: "Demodara, nestled in Sri Lanka’s hill country, is famous for its unique railway loop and the stunning Nine Arches Bridge. Surrounded by lush greenery, it offers scenic hikes like Ella Rock and captivating views, making it a must-visit destination."
        },
        {
            title: "Nuwara-Eliya",
            image: NuwaraEliya,
            description: "Nuwara Eliya, known as Little England, is a charming hill station in Sri Lanka. With its cool climate, colonial architecture, and scenic landscapes, it offers attractions like Horton Plains, Gregory Lake, and lush tea plantations, making it a top destination."
        },
        {
            title: "Pinnawala",
            image: Pinnawala,
            description: "Pinnawala, located in Sri Lanka’s Sabaragamuwa Province, is famous for its Elephant Orphanage, home to the world’s largest herd of captive Asian elephants. Visitors can enjoy watching elephants being fed and bathed, making it a must-see wildlife experience."
        }
    ];

    return (
        <div className="bg-white min-h-screen px-4 py-10 md:px-20">
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-10"
            >
                Sri Lanka's Best Locations
            </motion.h1>

            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((loc, index) => {
                    const fromX = isMobile ? (index % 2 === 0 ? -50 : 50) : 0;
                    const fromY = isMobile ? 0 : 40;

                    return (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
                            initial={{ opacity: 0, x: fromX, y: fromY }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={loc.image}
                                alt={loc.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-green-800 mb-2">
                                    {loc.title}
                                </h2>
                                <p className="text-gray-700 text-sm">{loc.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
