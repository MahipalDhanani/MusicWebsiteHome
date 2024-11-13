import React from "react";

const courses = [
    {
      id: 1,
      title: "Guitar Basics",
      description: "Learn the fundamentals of guitar playing.",
      image: "/public/Images/Guitar Basics.jpg", 
      link: "/courses/guitar-basics",
    },
    {
      id: 2,
      title: "Piano Essentials",
      description: "Master the basics of piano techniques.",
      image: "/public/Images/Piano Essentials.jpg",
      link: "/courses/piano-essentials",
    },
    {
      id: 3,
      title: "Drumming 101",
      description: "Start your drumming journey here.",
      image: "/public/Images/Drumming 101.jpg",
      link: "/courses/drumming-101",
    },
    {
      id: 4,
      title: "Vocal Training",
      description: "Learn the essentials of vocal techniques.",
      image: "/public/Images/Guitar Basics.jpg",
      link: "/courses/vocal-training",
    },
    {
      id: 5,
      title: "Music Theory",
      description: "Dive into the world of music theory.",
      image: "/public/Images/Guitar Basics.jpg",
      link: "/courses/music-theory",
    },
    {
      id: 6,
      title: "DJ Skills",
      description: "Learn DJing basics and performance techniques.",
      image: "/public/Images/Guitar Basics.jpg",
      link: "/courses/dj-skills",
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
    </div>
  );
};

export default CourseDisplay;
