import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: You can use any icon library

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-fultext-#4b5aa5">
            {/* Header */}
            <header className=" w-full py-4 px-4 md:py-6 md:px-10 flex flex-col md:flex-row items-center justify-between relative">
                {/* Logo and Title */}
                <div className="flex items-center w-full justify-between md:justify-start">
                    <div className="flex items-center">
                        <img 
                            src="/logo.png" 
                            alt="Mathugama Express Logo"
                            className="cursor-pointer h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full"
                        />
                        <h2
                            className="text-3xl md:text-5xl font-bold italic text-blue-950 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.5)] ml-5"
                            style={{ fontFamily: '"Lobster", cursive' }}>
                            D & M TRAVEL FAST
                        </h2>

                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-#4b5aa5 md:hidden"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-10 items-center mt-4 md:mt-0">
    <Link to="/" className="text-#4b5aa5 text-lg font-semibold hover:text-yellow-300 transition whitespace-nowrap">Home</Link>
    <Link to="/vehicles" className="text-#4b5aa5 text-lg font-semibold hover:text-yellow-300 transition whitespace-nowrap">Vehicles</Link>
    <Link to="/holiday" className="text-#4b5aa5 text-lg font-semibold hover:text-yellow-300 transition whitespace-nowrap">Holiday Plan</Link>
    <Link to="/contact" className="text-#4b5aa5 text-lg font-semibold hover:text-yellow-300 transition whitespace-nowrap">Contact Us</Link>
</nav>


                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="flex flex-col w-full mt-4 md:hidden rounded-lg p-4 space-y-2">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-#4b5aa5 text-base font-medium hover:text-yellow-300 transition">Home</Link>
                        <Link to="/vehicles" onClick={() => setMobileMenuOpen(false)} className="text-#4b5aa5 text-base font-medium hover:text-yellow-300 transition">Vehicles</Link>
                        <Link to="/holiday" onClick={() => setMobileMenuOpen(false)} className="text-#4b5aa5 text-base font-medium hover:text-yellow-300 transition">Holiday Plan</Link>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-#4b5aa5 text-base font-medium hover:text-yellow-300 transition">Contact Us</Link>
                    </nav>
                )}
            </header>

            
        </div>
    );
}
