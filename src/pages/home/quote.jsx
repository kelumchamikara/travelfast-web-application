export default function QuoteForm() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
            <h1 className="text-3xl font-bold mb-6">Get a Quote</h1>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-3 border rounded-md shadow-sm"
                />
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 border rounded-md shadow-sm"
                />
                <div className="flex space-x-2">
                    <select className="p-3 border rounded-md shadow-sm w-20">
                        <option value="94">+94</option>
                        <option value="1">+1</option>
                        <option value="44">+44</option>
                        <option value="91">+91</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Contact"
                        className="flex-1 p-3 border rounded-md shadow-sm"
                    />
                </div>
                <input
                    type="email"
                    placeholder="E-Mail"
                    className="w-full p-3 border rounded-md shadow-sm"
                />
                <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full p-3 border rounded-md shadow-sm"
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800 transition"
                    >
                        Get A Quote
                    </button>
                </div>
            </form>
        </div>
    );
}
