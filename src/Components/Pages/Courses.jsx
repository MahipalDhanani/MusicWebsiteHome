import React from 'react';
import { HOC } from '../Hoc/HOC';
import { GiGuitar, GiDrumKit, GiMusicSpell } from 'react-icons/gi'; // Use `react-icons` for all icons
import { GiViolin } from "react-icons/gi";
import { FaMicrophoneAlt } from 'react-icons/fa';

function Courses() {
  const courses = [
    { icon: <GiGuitar />, title: "Guitar", description: "Learn to play acoustic and electric guitar with ease." },
    { icon: <GiDrumKit />, title: "Drums", description: "Master rhythm and beats with drum classes." },
    { icon: <GiMusicSpell />, title: "Piano", description: "Become proficient in playing the piano, from beginner to advanced." },
    { icon: <GiViolin />, title: "Violin", description: "Learn the art of violin, whether you're starting fresh or improving skills." },
    { icon: <FaMicrophoneAlt />, title: "Vocal Training", description: "Enhance your singing skills with professional vocal coaching." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className=" text-center text-3xl md:text-4xl mb-10">Music Instrument Classes</h2>
        
        {/* Course List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-center mb-4 text-4xl text-[#fcd462]">
                {course.icon} {/* Directly render the icon as a React component */}
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">{course.title}</h3>
              <p className="text-center text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HOC(Courses);
