// export default function ContactUs() {
//     return (
//         <div className="bg-white min-h-screen px-4 py-10 md:px-20">
//             {/* Page Heading */}
//             <h1 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-10">
//                 Contact Us
//             </h1>

//             <h1>Ready to Talk?</h1>
//             <p>Have questions or need help planning your Sri Lanka journey? Reach out today — we're here to make your travel and vehicle rental seamless and stress-free.</p>

//             {/* Contact Info Section */}
//             <div className="max-w-xl mx-auto bg-gray-50 shadow-md rounded-xl p-6 space-y-6 text-center md:text-left">
//                 <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Email Address</h2>
//                     <p className="text-gray-600">travelfast999@gmail.com</p>
//                 </div>

//                 <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Phone Numbers</h2>
//                     <p className="text-gray-600">077 233 6709</p>
//                     <p className="text-gray-600">077 902 5475</p>
//                 </div>
//             </div>

//             {/* background image */}
//             <img
//                 src="/galle fort.jpg"
//                 alt="galle fort"
//                 className="w-full h-full object-cover"
//             />
//         </div>
//     );
// }
//-------------------------------------------------------------------------------------

// export default function ContactUs() {
//     return (
//         <div className="relative w-full h-screen font-sans">
//             {/* Background Image */}
//             <img
//                 src="/galle fort.jpg"
//                 alt="Galle Fort"
//                 className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
//             />

//             {/* Content Overlay */}
            

//             {/* Main Content */}
//             <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-16 text-white text-center">
//                 <h1 className="text-3xl md:text-5xl font-bold text-green-400 drop-shadow-md mb-2">
//                     Contact Us
//                 </h1>
//                 <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//                     Ready to Talk?
//                 </h2>
//                 <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-gray-200">
//                     Have questions or need help planning your Sri Lanka journey? Reach out today —
//                     we're here to make your travel and vehicle rental seamless and stress-free.
//                 </p>

//                 <div className="bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xl space-y-6">
//                     <div>
//                         <h3 className="text-xl font-semibold text-green-300">Email Address</h3>
//                         <p className="text-white">travelfast999@gmail.com</p>
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold text-green-300">Phone Numbers</h3>
//                         <p className="text-white">077 233 6709</p>
//                         <p className="text-white">077 902 5475</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//--------------------------------------------------------------------------------------------------------



// import { Phone } from 'lucide-react';

// export default function ContactUs() {
//     return (
//         <div className="relative w-full min-h-screen font-sans">
//             {/* Background Image */}
//             <img
//                 src="/sigiriya.jpg"
//                 alt="Galle Fort"
//                 className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
//             />

//             {/* Overlay Content */}
//             <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 text-white text-center">
//                 <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 drop-shadow-md mb-2">
//                     Contact Us
//                 </h1>
//                 <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//                     Ready to Talk?
//                 </h2>
//                 <p className="text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed text-gray-200">
//                     Have questions or need help planning your Sri Lanka journey? Reach out today —
//                     we're here to make your travel and vehicle rental seamless and stress-free.
//                 </p>

//                 {/* Contact Info Card */}
//                 <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-6">
//                     <div>
//                         <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-1">Email Address</h3>
//                         <p className="text-lime-500 text-sm sm:text-2xl">travelfast351@gmail.com</p>
//                     </div>

//                     <div>
//                         <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-4">Phone Numbers</h3>
//                         <div className="space-y-4">
//                             {[
//                                 { label: "+94 772 336 709", number: "tel:+94772336709" },
//                                 { label: "+94 779 025 475", number: "tel:+94779025475" },
//                             ].map(({ label, number }) => (
//                                 <a
//                                     key={label}
//                                     href={number}
//                                     className="flex items-center justify-center gap-2 text-white bg-lime-500 hover:bg-lime-600 transition-all duration-300 text-base sm:text-lg font-semibold px-5 py-3 rounded-full shadow-lg"
//                                 >
//                                     <Phone size={20} className="shrink-0" />
//                                     {label}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//-----------------------------------------------------------------------------------------------------


import { Phone } from 'lucide-react';

export default function ContactUs() {
    return (
        <>
            {/* Contact Section with Background */}
            <div className="relative w-full min-h-screen font-sans">
                {/* Background Image */}
                <img
                    src="/sigiriya.jpg"
                    alt="Galle Fort"
                    className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
                />

                {/* Overlay Content */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 text-white text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 drop-shadow-md mb-2">
                        Contact Us
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Ready to Talk?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed text-gray-200">
                        Have questions or need help planning your Sri Lanka journey? Reach out today — we're here to make your travel and vehicle rental seamless and stress-free.
                    </p>

                    {/* Contact Info Card */}
                    <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-6">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-1">Email Address</h3>
                            <p className="text-lime-500 text-sm sm:text-2xl">travelfast351@gmail.com</p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-4">Phone Numbers</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "+94 772 336 709", number: "tel:+94772336709" },
                                    { label: "+94 779 025 475", number: "tel:+94779025475" },
                                ].map(({ label, number }) => (
                                    <a
                                        key={label}
                                        href={number}
                                        className="flex items-center justify-center gap-2 text-white bg-lime-500 hover:bg-lime-600 transition-all duration-300 text-base sm:text-lg font-semibold px-5 py-3 rounded-full shadow-lg"
                                    >
                                        <Phone size={20} className="shrink-0" />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Map Section */}
            <div className="w-full bg-gray-100 py-12 px-4 flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Our Location
                </h2>
                <div className="w-full max-w-5xl h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <iframe
                        title="Our Location on Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8712635171164!2d79.89237007475688!3d6.90599409309338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259004cb32121%3A0xb30efc496d75259b!2sLiyanage%20Mawatha%2C%20Nawala%20Road%2C%20Rajagiriya!5e0!3m2!1sen!2slk!4v1748454552520!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

