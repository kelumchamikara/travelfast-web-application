// export default function CustomerHome() {
//     return (
//         <div className="w-full min-h-screen flex flex-col">
            
//         <div className="relative w-full h-screen">
//             <img
//                 src="/beach.jpeg"
//                 alt="Beach"
//                 className="w-full h-full object-cover"
//             />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                 <h1 className="text-white text-5xl md:text-6xl font-bold text-center px-4">
//                      Visit Sri Lanka the classical <br /> way
//                 </h1>
//                 </div>
//         </div>
//         <div>
//             <img
//                 src="/sigiriya2.jpeg"
//                 alt="sigiriya"
//                 className="w-full h-full object-cover"
//             />
//         </div>
//         <div>
//             <img
//                 src="/ninearch.jpeg"
//                 alt="ninearch"
//                 className="w-full h-full object-cover"
//             />
//         </div>
//         <div>
//             <img
//                 src="/ruwanweli maha seya.jpeg"
//                 alt="ruwanweli maha seya"
//                 className="w-full h-full object-cover"
//             />
//         </div>
//         <div>
//             <img
//                 src="/fort galle.jpeg"
//                 alt="fort galle"
//                 className="w-full h-full object-cover"
//             />
//         </div>



//             {/* Our Services Section */}
//             <section className="py-12 bg-gray-100 px-4 md:px-16">
//     <h1 className="text-4xl font-bold mb-8 text-gray-800 text-left">Our Services</h1>
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <img src="/poster1.jpeg" alt="poster1" className="w-full h-auto rounded-lg shadow-md" />
//         <img src="/airportdrop.jpeg" alt="airportdrop" className="w-full h-auto rounded-lg shadow-md" />
//         <img src="/weddingposter2.jpg" alt="weddingcar" className="w-full h-auto rounded-lg shadow-md" />
//         <img src="/bmw (1).jpg" alt="classiccar" className="w-full h-auto rounded-lg shadow-md" />
//     </div>
// </section>


//             {/* About Sri Lanka Section */}
//             <section className="py-20 px-4 md:px-24 bg-white">
//                 <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
//                     {/* Left Side - Heading */}
//                     <div className="md:w-1/3 text-center md:text-left">
//                         <h1 className="text-4xl font-bold text-gray-900">ABOUT SRI LANKA</h1>
//                     </div>

//                     {/* Right Side - Paragraph */}
//                     <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
//                         <p>
//                             Paradise is still the most commonly used word to describe Sri Lanka – a lush, tropical island of golden beaches and brilliant
//                             blue waters. Visitors planning a Sri Lanka travel adventure can choose between a variety of activities from lazing on the beach
//                             to diving in coral reefs and observing the wildlife to exploring ancient temples and ruins.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }




//-----------------------------------------------------


'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: '/ruwanweli maha seya.jpeg',
    alt: 'Ruwanweli Maha Seya',
    title: 'Visit Sri Lanka The Classical Way',
  },
  {
    src: '/sigiriya2.jpeg',
    alt: 'Sigiriya',
    title: '',
  },
  {
    src: '/beach.jpeg',
    alt: 'Beach',
    title: '',
  },
  {
    src: '/fort galle.jpeg',
    alt: 'Fort Galle',
    title: '',
  },
  {
    src: '/ninearch.jpeg',
    alt: 'Nine Arch',
    title: '',
  },
];

export default function CustomerHome() {
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
    <div className="w-full min-h-screen flex flex-col">

      {/* Hero Section */}
      {/* <div className="relative w-full h-screen">
        <img
          src="/beach.jpeg"
          alt="Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center px-4">
            Visit Sri Lanka the classical <br /> way
          </h1>
        </div>
      </div> */}

      {/* Carousel Section */}
      <div className="w-full bg-white py-10 px-4">
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
              {images.map((img, index) => {
                const isActive = index === current;
                const isPrev = index === (current === 0 ? images.length - 1 : current - 1);
                const isNext = index === (current + 1) % images.length;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 mx-2 rounded-xl overflow-hidden shadow-lg ${
                      isActive
                        ? 'w-[300px] md:w-[500px] h-[300px] md:h-[400px] scale-100 z-20'
                        : isPrev || isNext
                        ? 'w-[150px] md:w-[200px] h-[200px] md:h-[300px] scale-90 opacity-60 z-10'
                        : 'hidden'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {isActive && img.title && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                          <h2 className="text-white text-xl md:text-3xl font-bold text-center">
                            {img.title}
                          </h2>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View */}
            <div className="sm:hidden w-full h-full relative rounded-xl overflow-hidden shadow-md">
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover"
              />
              {images[current].title && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-2">
                  <h2 className="text-white text-xl font-bold text-center">
                    {images[current].title}
                  </h2>
                </div>
              )}
            </div>
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
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-gray-800 scale-110' : 'bg-gray-400'
              } transition-all`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <section className="py-12 bg-gray-100 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-left">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <img src="/poster1.jpeg" alt="poster1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/airportdrop.jpeg" alt="airportdrop" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/weddingposter2.jpg" alt="weddingcar" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/bmw (1).jpg" alt="classiccar" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>

      {/* About Sri Lanka Section */}
      <section className="py-20 px-4 md:px-24 bg-white">
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
      </section>

    </div>
  );
}






