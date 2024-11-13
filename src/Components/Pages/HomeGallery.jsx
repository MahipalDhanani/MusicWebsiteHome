import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 1' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 2' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 3' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 4' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 5' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 6' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 7' },
    { src: '/Images/Open Riyaz.jpg', alt: 'Event 8' },
  ];

  return (
    <div className="py-4 lg:px-0 px-4 mx-auto max-w-screen-xl py-16">
      <h2 className="text-5xl  text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
