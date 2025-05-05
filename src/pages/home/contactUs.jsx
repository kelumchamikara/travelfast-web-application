export default function ContactUs() {
    return (
        <div className="bg-white min-h-screen px-4 py-10 md:px-20">
            {/* Page Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-10">
                Contact Us
            </h1>

            {/* Contact Info Section */}
            <div className="max-w-xl mx-auto bg-gray-50 shadow-md rounded-xl p-6 space-y-6 text-center md:text-left">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Email Address</h2>
                    <p className="text-gray-600">travelfast999@gmail.com</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Phone Numbers</h2>
                    <p className="text-gray-600">077 233 6709</p>
                    <p className="text-gray-600">077 902 5475</p>
                </div>
            </div>
        </div>
    );
}
