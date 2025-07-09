'use client';

import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/ruwanweli maha seya.jpeg',
    alt: 'Ruwanweli Maha Seya',
    title: 'Visit Sri Lanka The Classical Way',
  },
  {
    src: '/sigiriya2.jpeg',
    alt: 'Sigiriya',
    title: 'Rise Above to Discover Timeless Beauty',
  },
  {
    src: '/beach.jpeg',
    alt: 'Beach',
    title: 'Relax by Sri Lanka’s Golden Shores',
  },
  {
    src: '/fort galle.jpeg',
    alt: 'Fort Galle',
    title: 'Stroll Through Stories of the Past',
  },
  {
    src: '/ninearch.jpeg',
    alt: 'Nine Arch',
    title: 'Ride Through Sri Lanka’s Hill Country Magic',
  },
];

export default function CustomerHome() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > 50
    ) {
      if (touchStartX.current > touchEndX.current) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen flex flex-col"
    >

      {/* Dynamic Title for Current Image */}
      <motion.div 
        className="text-center"
        key={images[current].title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 transition-all duration-500">
          {images[current].title}
        </h2>
      </motion.div>

      {/* Carousel Section */}
      <div className="w-full bg-white py-6 px-4">
        <div
          className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev Button */}
          <div
            className="absolute left-0 z-10 flex items-center justify-center h-full w-[50px] sm:w-[80px] cursor-pointer bg-white/50 hover:bg-white/70 rounded-r-xl"
            onClick={prevSlide}
          >
            <ChevronLeft size={28} className="text-gray-700" />
          </div>

          {/* Carousel Images */}
          <div className="flex transition-transform duration-700 ease-in-out w-full justify-center items-center">
            {/* Desktop/Tablet View */}
            <div className="hidden sm:flex">
              <AnimatePresence mode="wait">
                {images.map((img, index) => {
                  const isActive = index === current;
                  const isPrev = index === (current === 0 ? images.length - 1 : current - 1);
                  const isNext = index === (current + 1) % images.length;

                  if (!(isActive || isPrev || isNext)) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className={`transition-all duration-500 mx-2 rounded-xl overflow-hidden shadow-lg ${
                        isActive
                          ? 'w-[300px] md:w-[500px] h-[300px] md:h-[400px] scale-100 z-20'
                          : 'w-[150px] md:w-[200px] h-[200px] md:h-[300px] scale-90 opacity-60 z-10'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Mobile View */}
            <motion.div
              key={images[current].src}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:hidden w-full h-full relative rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Next Button */}
          <div
            className="absolute right-0 z-10 flex items-center justify-center h-full w-[50px] sm:w-[80px] cursor-pointer bg-white/50 hover:bg-white/70 rounded-l-xl"
            onClick={nextSlide}
          >
            <ChevronRight size={28} className="text-gray-700" />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-gray-800 scale-110' : 'bg-gray-400'
              } transition-all`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* About Sri Lanka Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 md:px-24 bg-white"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          <div className="md:w-1/3 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">ABOUT SRI LANKA</h1>
          </div>
          <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
            <p>
              Paradise is still the most commonly used word to describe Sri Lanka – a lush, tropical island of golden beaches and brilliant
              blue waters. Visitors planning a Sri Lanka travel adventure can choose between a variety of activities from lazing on the beach
              to diving in coral reefs and observing the wildlife to exploring ancient temples and ruins.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section with Motion */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Services
        </motion.h2>

        {/* Service 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/poster1.jpeg" alt="poster1" className="rounded-xl shadow-lg w-full md:w-1/2" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold mb-3">
              Experience Travel Like Never Before – Comfort, Safety & Style Combined
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At D&M Travel Fast, we redefine road travel by offering a premium and comfortable transportation service tailored to your needs.
              Whether you're planning a family vacation, a corporate trip, or a weekend getaway, our fleet of modern, well-maintained vehicles
              ensures a smooth, relaxing, and enjoyable journey every time.
            </p>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/airportdrop.jpeg" alt="airportdrop" className="rounded-xl shadow-lg w-full md:w-1/2" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold mb-3">
              Airport Drop & Pickup – On-Time, Every Time
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Travel stress-free with D&M Travel Fast’s reliable airport pickup and drop services.
              Whether you're arriving after a long flight or heading to the airport for a departure,
              our punctual and professional drivers ensure you reach your destination comfortably and on time.
              <br /><br />
              We track your flight in real-time to adjust for delays and guarantee timely service.
              Our clean, air-conditioned vehicles provide a smooth ride, and our courteous chauffeurs assist with
              luggage and ensure a hassle-free experience from start to finish.
              <br /><br />
              Book in advance and enjoy peace of mind knowing your airport transfer is in safe hands.
            </p>
          </div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/weddingposter2.jpg" alt="weddingposter" className="rounded-xl shadow-lg w-full md:w-1/2" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold mb-3">
              Wedding Car Rental – Arrive in Style on Your Special Day
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Make your big day even more unforgettable with D&M Travel Fast’s premium wedding car rental service.
              Choose from our fleet of elegant, chauffeur-driven vehicles designed to add a touch of class and comfort
              to your wedding celebration.
              <br /><br />
              Whether you prefer a classic luxury car or a stylish modern ride, we offer beautifully maintained vehicles
              decorated to match your wedding theme. Our professional drivers ensure a smooth, punctual, and graceful
              arrival—so you can focus on making memories while we handle the ride.
              <br /><br />
              Celebrate love with style, comfort, and sophistication—book your wedding car today!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Get a Quote Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-20"
      >
        <button
          onClick={() => navigate('/quote')}
          className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          Get a Quote <ChevronRight size={18} />
        </button>
      </motion.div>

    </motion.div>
  );
}