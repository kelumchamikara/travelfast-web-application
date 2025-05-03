import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: You can use any icon library

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white">
            {/* Header */}
            <header className="bg-green-900 w-full py-4 px-4 md:py-6 md:px-10 flex flex-col md:flex-row items-center justify-between relative">
                {/* Logo and Title */}
                <div className="flex items-center w-full justify-between md:justify-start">
                    <div className="flex items-center">
                        <img 
                            src="/logo.png" 
                            alt="Mathugama Express Logo"
                            className="cursor-pointer h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-full"
                        />
                        <h2 className="text-white text-xl md:text-3xl font-semibold ml-4">
                            Cab and Tour <span className="hidden sm:inline">(Sri Lanka)</span>
                        </h2>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white md:hidden"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-10 items-center mt-4 md:mt-0">
                    <Link to="/" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Home</Link>
                    <Link to="/vehicles" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Vehicles</Link>
                    <Link to="/holiday" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Holiday Plan</Link>
                    <Link to="/contact" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Contact Us</Link>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="flex flex-col w-full mt-4 md:hidden bg-green-800 rounded-lg p-4 space-y-2">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-base font-medium hover:text-yellow-300 transition">Home</Link>
                        <Link to="/vehicles" onClick={() => setMobileMenuOpen(false)} className="text-white text-base font-medium hover:text-yellow-300 transition">Vehicles</Link>
                        <Link to="/holiday" onClick={() => setMobileMenuOpen(false)} className="text-white text-base font-medium hover:text-yellow-300 transition">Holiday Plan</Link>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white text-base font-medium hover:text-yellow-300 transition">Contact Us</Link>
                    </nav>
                )}
            </header>

            
        </div>
    );
}
