import React from "react";

const courses = [
    {
      id: 1,
      title: "VOCAL",
      description: "Learn the essentials of vocal techniques.",
      image: "/Images/VOCAL.jpg",  
      link: "/courses/vocal",
    },
    {
      id: 2,
      title: "HARMONIYUM",
      description: "Master the basics of Harmonium playing.",
      image: "/Images/harmonium.jpg",  
      link: "/courses/harmonium",
    },
    {
      id: 3,
      title: "KEYBOARD",
      description: "Learn keyboard skills and music theory.",
      image: "/Images/keyboard.jpg",  
      link: "/courses/keyboard",
    },
    {
      id: 4,
      title: "TABLA",
      description: "Master the art of playing Tabla.",
      image: "/Images/Tabla.jpg",  
      link: "/courses/tabla",
    },
    {
      id: 5,
      title: "GUITAR",
      description: "Learn the fundamentals of guitar playing.",
      image: "/Images/Guitar.jpg",  
      link: "/courses/guitar",
    },
    {
      id: 6,
      title: "OUCTOPED",
      description: "Learn music production using Aouctoped.",
      image: "/Images/Ouctoped.jpg",  
      link: "/courses/Ouctoped",
    },
];

const CourseDisplay = () => {
  return (
    <div className="container mx-auto max-w-screen-xl py-16 lg:px-0 px-4">
      <h2 className="text-5xl text-center mb-8">Our Courses</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <a
            key={course.id}
            href={course.link}
            className="group block rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover transition-opacity group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white drop-shadow-lg">
                {course.title}
              </h3>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">{course.description}</p>
            </div>
          </a>
        ))}
      </div>
        <amp-ad width="100vw" height="320"
     type="adsense"
     data-ad-client="ca-pub-8767032106327629"
     data-ad-slot="5047801795"
     data-auto-format="mcrspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
    </div>
  );
};

export default CourseDisplay;
